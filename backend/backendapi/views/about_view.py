from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import About

class AboutSerializer(serializers.ModelSerializer):
  class Meta:
    model = About
    fields = '__all__'

class AboutListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = About.objects.all()
  serializer_class = AboutSerializer
  pagination_class = None
