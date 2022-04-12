from django import forms


# Create forms
class ContactForm(forms.Form):
    name = forms.CharField(label="Your Name", max_length=50)
    email = forms.EmailField(label="Your Email", max_length=256)
    subject = forms.CharField(max_length=512)
    message = forms.CharField(widget=forms.Textarea, max_length=3000)