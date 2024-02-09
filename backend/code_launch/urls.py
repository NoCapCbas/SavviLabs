from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_code_lauch, name='get_code_lauch'),
]
