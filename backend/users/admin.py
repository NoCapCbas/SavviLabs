from django.contrib import admin
from api.models import User, Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class Profile(admin.ModelAdmin):
    list_editable = ['user', 'first_name', 'last_name', 'verfified']
    list_display = ['user', 'first_name', 'last_name', 'verfified']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
