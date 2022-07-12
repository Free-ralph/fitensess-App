
from rest_framework import serializers
from backend.models import Exercise, BodyPart
from django.contrib.auth.models import User

class ExerciseSerializer(serializers.ModelSerializer):
    bodyPart = serializers.CharField(source = 'bodyPart.name')
    class Meta:
        model = Exercise
        fields = [
            'id',
            'bodyPart', 
            'equipment',
            'gifUrl',
            'name',
            'target'
        ]
    

# class BodyPartSerializer(serializers.Serializer):
#     body_part = serializers.CharField()

class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [
            'username',
            'email', 
            'password'
        ]

    def save(self, *args, **kwargs):
        user = User(
            username = self.validated_data['username'], 
            email = self.validated_data['email'], 
            password = self.validated_data['password']
        )
        user.save()
        return user

