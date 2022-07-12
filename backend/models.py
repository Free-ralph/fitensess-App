from django.db import models


class Exercise(models.Model):
    bodyPart = models.ForeignKey('BodyPart', on_delete=models.SET_NULL, null=True)
    equipment = models.CharField(max_length=120)
    gifUrl = models.URLField()
    name = models.CharField(max_length=200)
    target = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class BodyPart(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return  self.name