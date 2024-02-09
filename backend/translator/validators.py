from django.core.exceptions import ValidationError

def lowercase_validator(value):
    if not value.islower():
        raise ValidationError('This field must be all lowercase.')
