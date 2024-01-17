from rest_framework.decorators import api_view
from rest_framework.response import Response

def get_routes(request):
    data = [
        {
            'Endpoint', '/products',
            'method', 'GET', 
            'body', None,
            'description', 'Returns nothing'
        },
        {
            'Endpoint', '/resources'
        },
    ]
    return Response(data) 

