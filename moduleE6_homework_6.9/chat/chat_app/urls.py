from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),  # маршрут для осн страницы чата
    path('<str:room_name>/', views.room, name='room'),  # для отображения переписки
]