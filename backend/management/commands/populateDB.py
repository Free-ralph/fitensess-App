from codeop import CommandCompiler
from email import header
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from backend.models import Exercise, BodyPart
import requests

RAPID_API_KEY = settings.RAPID_API_KEY
class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('amount', type = int, help = 'How many records do you want sire')
        

    def handle(self, *args, **options):
        amount = options['amount']
        url = 'https://exercisedb.p.rapidapi.com/exercises'
        headers = {
		'X-RapidAPI-Key': RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	    }
        response = requests.get(url, headers=headers)
        if response.status_code == amount:
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
                if count == amount:
                    break
            self.stdout.write(self.style.SUCCESS('database populated succesfully'))
        else:
            raise CommandError('data fetch failed')
