import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const Blog = ({ initialValues = { title: "", content: "" }, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Blog Title: </Text>
        <TextInput
          style={styles.textBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title of Blog Post"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.header}>Blog Content: </Text>
        <TextInput
          style={styles.textBox}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Write something here ..."
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline={true}
          numberOfLines={10}
          textAlignVertical="top"
        />
      </View>
      <Button title="SAVE" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  row: {
    padding: 10,
    marginBottom: 10,
  },
  textBox: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Blog;
