from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from messager import views

router = routers.DefaultRouter()
router.register(r'People', views.PeopleViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),
]

