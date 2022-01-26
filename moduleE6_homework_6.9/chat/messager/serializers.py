from .models import *
from rest_framework import serializers

from .models import People


class PeopleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = People
        fields = ['name', 'age']
