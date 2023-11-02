from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import Hero


class HeroSerializer(serializers.ModelSerializer):
  class Meta:
    model = Hero
    fields = '__all__'


class HeroListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Hero.objects.all()
  serializer_class = HeroSerializer
  pagination_class = None
