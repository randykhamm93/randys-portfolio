from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import Footer


class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = '__all__'


class FooterListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Footer.objects.all()
    serializer_class = FooterSerializer
    pagination_class = None
