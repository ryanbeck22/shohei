from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class ProgressData(APIView):
    def get(self, request):
        data = {
            "current": 31,
            "pace": 62
        }
        return Response(data)
