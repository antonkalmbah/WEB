from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from chat_app import views

router = routers.DefaultRouter()
router.register(r'People', views.PeopleViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('', include(router.urls)),
    path('', include('chat_app.urls')),
]

