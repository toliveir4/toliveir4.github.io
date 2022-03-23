from time import sleep

from django.shortcuts import render
from django.views.generic import View
import requests  # requests library to do api calls


# Create your views here.
class Portfolio(View):
    def get(self, request):
        return render(request, "index.html")

    def post(self, request):
        return 0
