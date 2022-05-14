import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/post.component";
import WithSpinner from "../../components/With-Spinner/withSpinner.component";
import { PostContext } from "../../context/provider/posts/posts.provider";

const PostPage = () => {
  const { isFetched, fetchingPost } = useContext(PostContext);
  const { id } = useParams();
  useEffect(() => {
    fetchingPost(id);
  }, []);

  const PostWithSpinner = WithSpinner(Post);
  return <PostWithSpinner isLoading={!isFetched} />;
};

export default PostPage;
