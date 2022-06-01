from django.shortcuts import render
from django.middleware.csrf import get_token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status


# Create your views here.

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()



class CreateTodoView(APIView):
    serializer_class = TodoSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            id = serializer.data.get('id')
            description = serializer.data.get('description')
            completed = serializer.data.get('completed')
            queryset = Todo.objects.filter(id=id)
            if queryset.exists():
                todo = queryset[0]
                todo.title = title
                todo.description = description
                todo.completed = completed
                todo.id = id
                todo.save(update_fields=['title', 'id', 'description', 'completed'])
                return Response(TodoSerializer(todo).data, status=status.HTTP_200_OK)
            else:
                todo = Todo(id=id, title=title, description=description, completed=completed)
                todo.save()
                return Response(TodoSerializer(todo).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)