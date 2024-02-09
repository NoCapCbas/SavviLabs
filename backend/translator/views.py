from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response 
from rest_framework import status 
from . import models
from . import serializers
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Create your views here.
@api_view(['GET'])
def translate_text(request):
    print('received_request')
    if request.method == 'GET':
        print('is get request')
        source_language = request.GET.get('source_language')
        target_language = request.GET.get('target_language')
        input_text = request.GET.get('input_text')
        input_character_count = len(input_text)
        
        serializer = serializers.TranslateTextRequestSerializer(data={
            'source_language': source_language,
            'target_language': target_language,
            'input_text': input_text,
            'input_character_count': input_character_count,
        })

        if serializer.is_valid():
            print('serializer is valid')
             
            model_name = f'Helsinki-NLP/opus-mt-{source_language}-{target_language}'
            # model_name = f'Helsinki-NLP/opus-mt-tc-big-{source_language}-{target_language}'

            try:
                model_instance = models.LanguageTranslationModel.objects.get(model_name=model_name)
            except models.LanguageTranslationModel.DoesNotExist:
                model_instance = None
                
            tokenizer = AutoTokenizer.from_pretrained(model_instance.model_name)
            model = AutoModelForSeq2SeqLM.from_pretrained(model_instance.model_name)
            
            input_ids = tokenizer.encode(input_text, return_tensors='pt', max_length=512, truncation=True)

            translation = model.generate(input_ids, max_length=100, early_stopping=True)
 
            translated_text = tokenizer.decode(translation[0], skip_special_tokens=True)
            print(f'Original Text({source_language}): ', input_text)
            print(f'Translated Text({target_language}): ', translated_text)

            serializer.save(translated_text=translated_text, status=1, language_model=model_instance)

            return Response(serializer.data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

