from django import forms


# Create forms
class ContactForm(forms.Form):
    name: str = forms.CharField(label="Your Name", max_length=50)
    email: str = forms.EmailField(label="Your Email", max_length=256)
    subject: str = forms.CharField(max_length=512)
    message: str = forms.CharField(widget=forms.Textarea, max_length=3000)