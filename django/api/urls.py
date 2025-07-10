from django.urls import path
from . import views

urlpatterns = [
    path('progress/', views.ProgressData.as_view(), name='progress-data'),
]
