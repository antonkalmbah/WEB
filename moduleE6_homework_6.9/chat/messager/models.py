from django.db import models


class People(models.Model):
    name = models.CharField(max_length=24)
    age = models.IntegerField()

    def __str__(self):
        return self.name
