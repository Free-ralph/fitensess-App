from django.urls import path
from .views import (exercise_view, register_view, ExerciseListApiView,
     body_parts_view, exercises_for_body_part_view, 
     exercise_detial_view, exercises_for_target_muscle_view, 
     exercises_for_equipment_view)
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('exercises/', ExerciseListApiView.as_view(), name = "all_exercises"),
    path('exercises/bodyPartList', body_parts_view, name = "body_part_list"),
    path('exercises/<int:id>', exercise_detial_view), 
    path('exercises/<str:bodyPart>', exercises_for_body_part_view), 
    path('exercises/target-muscle/<str:target>', exercises_for_target_muscle_view), 
    path('exercises/equipment/<str:equipment>', exercises_for_equipment_view), 

    # authentication
    path('authenticate/register', register_view, name = "register"),
    path('authenticate/login', obtain_auth_token, name = "login")
]