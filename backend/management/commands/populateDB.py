from codeop import CommandCompiler
from email import header
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from backend.models import Exercise, BodyPart
import requests

RAPID_API_KEY = settings.RAPID_API_KEY
class Command(BaseCommand):
    def handle(self, *args, **options):
        url = 'https://exercisedb.p.rapidapi.com/exercises'
        headers = {
		'X-RapidAPI-Key': RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	    }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            response_data = response.json()
            for count, data in enumerate(response_data):
                body_part_qs = BodyPart.objects.filter(name = data['bodyPart'])
                if not body_part_qs.exists():
                    body_part = BodyPart(name = data['bodyPart'])
                    body_part.save()
                else:
                    body_part = body_part_qs[0]

                Exercise.objects.create(
                    bodyPart = body_part,
                    equipment = data['equipment'],
                    gifUrl = data['gifUrl'],
                    name = data['name'], 
                    target = data['target']
                )
                # if count == 500:
                #     break
            self.stdout.write(self.style.SUCCESS('database populated succesfully'))
        else:
            raise CommandError('data fetch failed')
