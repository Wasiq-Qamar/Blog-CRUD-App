import React, { useContext } from "react";
import { Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import Blog from "../components/Blog";

const Create = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((item) => item.id === route.params.id);

  return (
    <Blog
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPost.id, title, content, () => {
          navigation.navigate("Home");
        });
      }}
    />
  );
};

export default Create;
