"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import routers
from django.urls import path
from django.urls import path
from backendapi.views import AboutListView, ContactListView

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'about', AboutListView, 'about')
router.register(r'contact', ContactListView, 'contact')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('about', AboutListView.as_view()),
    path('contact', ContactListView.as_view()),
]
