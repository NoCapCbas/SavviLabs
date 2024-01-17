from rest_framework.decorators import api_view
from rest_framework.response import Response
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

