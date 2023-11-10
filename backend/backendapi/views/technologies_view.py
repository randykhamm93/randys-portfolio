from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import Technology


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'


class TechnologyListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    pagination_class = None
