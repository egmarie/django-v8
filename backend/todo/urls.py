from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('add-todo/', views.CreateTodoView.as_view(), name='add-todo'),
    path('todos/', views.TodoView.as_view({'get': 'list'}), name='todo-views')
]