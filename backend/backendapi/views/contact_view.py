from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class ContactListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    pagination_class = None
