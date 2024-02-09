from . import models
from rest_framework import serializers

class TranslateTextRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TranslateTextRequest 
        fields = '__all__'
