from .base import *

ALLOWED_HOSTS = []

DATABASES = {

    'default': {

        'ENGINE': 'django.db.backends.postgresql_psycopg2',

        'NAME': env('DATABASE_NAME'),

        'USER': env('DATABASE_USER'),

        'PASSWORD': env('DATABASE_PASSWORD'),

        'HOST': 'localhost',

        'PORT': '5432',

    }

}
