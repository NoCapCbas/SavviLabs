from django.contrib import admin
from . import models

class TranslateTextRequestAdmin(admin.ModelAdmin):
    list_display = ['source_language', 'target_language', 'created_at']

admin.site.register(models.TranslateTextRequest, TranslateTextRequestAdmin)

class LanguageAdmin(admin.ModelAdmin):
    list_editable = ['is_source', 'is_target']
    list_display = ['code', 'name', 'is_source', 'is_target']

admin.site.register(models.Language, LanguageAdmin)

class LanguageTranslationModelAdmin(admin.ModelAdmin):
    list_display = ['model_name', 'source_language', 'target_language']

admin.site.register(models.LanguageTranslationModel, LanguageTranslationModelAdmin)
