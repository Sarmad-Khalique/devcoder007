import os

from django.http import HttpResponse, HttpResponseNotFound
from django.views import View
from rest_framework import generics

from blog.api.serializers import PostSerializer
from blog.models import Post


class PostListView(generics.ListAPIView):
    queryset = Post.published.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.published.all()
    serializer_class = PostSerializer


class Assets(View):
    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
