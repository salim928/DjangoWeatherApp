from django.shortcuts import render,redirect
from .forms import SignupForm
from .models import User

# Create your views here.
def success(request):
    return render(request, "signup/templates/success.html")

def Signup(request):
    if request.method == "POST":
        form  = SignupForm(request.POST)
        if form.is_valid():
            #Create a new User object and save it to the database
            user = User(
                first_name = form.cleaned_data['first_name'],
                last_name = form.cleaned_data['last_name'],
                email = form.cleaned_data['email'],
                password = form.cleaned_data['password'],
            )
            user.save()
            return redirect("success") #Courses page
    else:
        form = SignupForm()


    return render(request, "signup/templates/signup.html", {'form':form})