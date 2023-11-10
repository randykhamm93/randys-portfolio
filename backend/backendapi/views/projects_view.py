from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework import serializers

from backendapi.models import Tag, Project


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)


class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Project
        fields = ('name', 'description', 'link', 'image', 'tags')


class ProjectListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = None
