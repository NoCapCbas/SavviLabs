from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    # path('token/', )
]
