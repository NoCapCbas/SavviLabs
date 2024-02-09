from django.db import models
from . import validators

# Create your models here.
class Language(models.Model):
    code = models.CharField(max_length=3, primary_key=True, unique=True, validators=[validators.lowercase_validator])
    name = models.CharField(max_length=30, validators=[validators.lowercase_validator])
    is_source = models.BooleanField(default=False, null=False, blank=False)
    is_target = models.BooleanField(default=False, null=False, blank=False)

    def __str__(self):
        return f'{self.name.capitalize()} ({self.code})'

class LanguageTranslationModel(models.Model):
    model_name = models.TextField(blank=False, null=False)
    source_language =  models.ForeignKey(
        Language, 
        on_delete=models.CASCADE, 
        related_name='source_language_models', 
        limit_choices_to={'is_source': True}
    )    
    target_language = models.ForeignKey(
        Language, 
        on_delete=models.CASCADE, 
        related_name='target_language_models', 
        limit_choices_to={'is_target': True}
    )    

    class Meta:
        unique_together = ('source_language', 'target_language')

class TranslateTextRequest(models.Model):
    STATUS_CHOICES = (
        (1, 'SUCCESSFUL'),
        (0, 'FAILED'),
    )

    input_text = models.TextField()
    source_language = models.ForeignKey(
        Language, 
        on_delete=models.CASCADE, 
        related_name='source_language_requests', 
        limit_choices_to={'is_source': True}
    )    
    target_language = models.ForeignKey(
        Language, 
        on_delete=models.CASCADE, 
        related_name='target_language_requests', 
        limit_choices_to={'is_target': True}
    )    
    translated_text = models.TextField(blank=True, null=True)
    input_character_count = models.IntegerField()
    status = models.IntegerField(choices=STATUS_CHOICES, blank=True, null=True)
    language_model = models.ForeignKey(
        LanguageTranslationModel, 
        on_delete=models.CASCADE, 
        related_name='model_name_requests', 
        blank=True, 
        null=True
    )    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'test'

