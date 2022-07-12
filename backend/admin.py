from django.contrib import admin
from .models import Exercise, BodyPart

class ExerciseAdminModel(admin.ModelAdmin):
    list_display = [
        'name', 
        'target',
        'bodyPart'
    ]
    search_fields = [
        'name', 
        'target', 
        'equipment', 
        'bodyPart'
    ]

admin.site.register(Exercise, ExerciseAdminModel)
admin.site.register(BodyPart)
