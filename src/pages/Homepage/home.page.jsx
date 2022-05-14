import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/provider/posts/posts.provider";
import CardContainer from "../../components/Card-Container/card-container.component";
import WithSpinner from "../../components/With-Spinner/withSpinner.component";

const Homepage = () => {
  const { fetchingPosts, isFetching } = useContext(PostContext);

  useEffect(() => {
    fetchingPosts();
  }, []);

  const CardContainerWithSpinner = WithSpinner(CardContainer);
  return <CardContainerWithSpinner isLoading={isFetching}/>;
};

export default Homepage;
