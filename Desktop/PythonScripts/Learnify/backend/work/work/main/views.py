from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Home(response):
    return render(response, "main/templates/home.html", {}) 
