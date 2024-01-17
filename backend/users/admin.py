from django.contrib import admin
from . import models

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['first_name', 'last_name', 'verified']
    list_display = ['user', 'first_name', 'last_name', 'verified']

admin.site.register(models.User, UserAdmin)
admin.site.register(models.Profile, ProfileAdmin)
