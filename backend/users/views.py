from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics, status
from . import models
from . import serializers

def get_routes(request):
    data = [
        {
            'Endpoint', '/users',
            'method', 'GET', 
            'body', None,
            'description', 'Returns a list of users'
        },
        {
            'Endpoint', '/resources'
        },
    ]
    return Response(data) 

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = serializers.CustomTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = models.User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = serializers.RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        response = f'Hey {request.user}, You are seeing GET response'
        data['response'] = response
        return Response(response, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        response = f'Hey {request.user}, You are seeing POST response: {text}'
        data['response'] = response
        return Response(response, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)



