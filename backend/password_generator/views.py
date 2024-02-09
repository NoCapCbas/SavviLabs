from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response 
from rest_framework import status 
from . import models
from . import serializers
import logging

logger = logging.getLogger('password_generator')

# Create your views here.
@api_view(['GET'])
def generate_password(request):
    logger.debug('>generate_password request recieved...')
    if request.method == 'GET':
        logger.debug('\t>request is get method...')
        pass
