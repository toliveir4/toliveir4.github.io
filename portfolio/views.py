from django.http import HttpResponse
from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import redirect, render
from django.views.generic import View
from portfolio.forms import ContactForm  # requests library to do api calls
from unidecode import unidecode


# Create your views here.
class Portfolio(View):
    def get(self, request):
        form = ContactForm()
        return render(request, "index.html", {'contactForm': form})

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = unidecode(form.cleaned_data["subject"])
            body = {
                "name": unidecode(form.cleaned_data["name"]),
                "email": form.cleaned_data["email"],
                "message": unidecode(form.cleaned_data["message"])
            }

            message = "\n".join(body.values())

            try:
                send_mail(subject, message, body["email"],
                          ["tiago.o.tocha@gmail.com"])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')

        form = ContactForm()
        return render(request, "index.html", {'contactForm': form})
