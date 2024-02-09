from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics, status
from rest_framework.exceptions import AuthenticationFailed
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

class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        try:
            user = User.objects.get(email = email)
        except User.DoesNotExist:
            raise AuthenticationFailed('Account does not exist')
        if user is None:
            raise AuthenticationFailed('User does not exist')
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')
        access_token = AccessToken.for_user(user)
        refresh_token = RefreshToken.for_user(user)
        return Response({
            'access_token': access_token,
            'refresh_token': refresh_token,
        })

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            if refresh_token:
                token.blacklist()
            return Response('Logout Successful', status=status.HTTP_200_OK)
        except TokenError:
            raise AuthenticationFailed('Invalid Token')

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



