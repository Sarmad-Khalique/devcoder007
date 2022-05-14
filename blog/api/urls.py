from django.urls import path
from blog.api.views import PostListView, PostDetailView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "blog"

urlpatterns = [
    path(
        "posts/",
        PostListView.as_view(),
        name="posts_list"
    ),
    path(
        "posts/<pk>/",
        PostDetailView.as_view(),
        name="post_detail"
    ),
    path('token/',
         TokenObtainPairView.as_view(),
         name='token_obtain_pair'
    ),
    path('token/refresh/',
         TokenRefreshView.as_view(),
         name='token_refresh'
    ),
]
