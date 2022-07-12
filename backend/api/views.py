from backend.models import Exercise, BodyPart
from django.core.exceptions import ObjectDoesNotExist
from .serializer import ExerciseSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from .serializer import RegisterSerializer, ExerciseSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

@api_view(['GET'])
def exercise_view(request):
    exercise_qs = Exercise.objects.all()
    print(exercise_qs)
    serializer = ExerciseSerializer(exercise_qs)

    return Response(serializer.data)

@api_view(['POST',])
def register_view(request):
    print(request.data)
    print(request.POST)
    serializer = RegisterSerializer(data=request.data)
    data = {}
    if serializer.is_valid():
        user = serializer.save()
        data['sucess'] = 'registered successfuly'
        data['username'] = user.username
        data['email'] = user.email
        token = Token.objects.create(user = user)
        data['token'] = token.key
    else:
        data = serializer.errors
    return Response(data)


@api_view(['GET'])
def exercises_for_body_part_view(request, bodyPart):
    exercises_qs = Exercise.objects.filter(bodyPart__name = bodyPart)
    serializer = ExerciseSerializer(exercises_qs, many = True)
    

    return Response(serializer.data)

@api_view(['GET'])
def exercises_for_target_muscle_view(request, target):
    exercises_qs = Exercise.objects.filter(target__icontains = target)
    serializer = ExerciseSerializer(exercises_qs, many = True)
    

    return Response(serializer.data)

@api_view(['GET'])
def exercises_for_equipment_view(request, equipment):
    exercises_qs = Exercise.objects.filter(equipment__icontains = equipment)
    serializer = ExerciseSerializer(exercises_qs, many = True)
    

    return Response(serializer.data)
    



# class BodyPartListApiView(ListAPIView):
#     serializer_class = BodyPartSerializer
#     queryset = BodyPart.objects.all()

@api_view(['GET',])
def body_parts_view(request):
    data = [bodypart.name for bodypart in BodyPart.objects.all()]
    return Response(data)

@api_view(['GET'])
def exercise_detial_view(request, id):
    try :
        exercise = Exercise.objects.get(id = id)
    except ObjectDoesNotExist :
        return Response({'error' : "Exercise does'nt exist"})

    serializer = ExerciseSerializer(exercise)

    return Response(serializer.data)


class ExerciseListApiView(ListAPIView):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()