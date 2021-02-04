import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const BlogScreen = ({ route, navigation }) => {
  const { state } = useContext(BlogContext);
  const renderItem = state.find((item) => item.id === route.params.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: route.params.id })}
        >
          <FontAwesome name="edit" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog title: </Text>
      <Text style={styles.title}>{renderItem.title}</Text>
      <Text style={styles.header}>Blog title: </Text>
      <Text style={styles.content}>{renderItem.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 15,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 25,
  },
  content: {
    fontSize: 18,
    marginLeft: 25,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  icon: {
    fontSize: 30,
    color: "black",
    padding: 15,
  },
});

export default BlogScreen;
