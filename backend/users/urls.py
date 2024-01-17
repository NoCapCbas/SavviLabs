from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
]
