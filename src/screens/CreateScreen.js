import React, { useContext } from "react";
import { Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import Blog from "../components/Blog";

const Create = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <Blog
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Home");
        });
      }}
    />
  );
};

export default Create;
