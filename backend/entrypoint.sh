#!/bin/sh

echo "Make migrations"
python manage.py makemigrations
echo "Migrate db"
python manage.py migrate --no-input
echo "Collect static files"
python manage.py collectstatic --no-input

DJANGO_SUPERUSER_PASSWORD=$SUPER_USER_PASSWORD python manage.py createsuperuser --username $SUPER_USER_NAME --email $SUPER_USER_EMAIL --no-input

echo "Starting server"
gunicorn django_server.wsgi:application --bind 0.0.0.0:8000
