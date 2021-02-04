import React, { useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(BlogContext);

  useFocusEffect(
    React.useCallback(() => {
      getBlogPosts();
    }, [])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <FontAwesome name="plus" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.blogContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Blog", { id: item.id })}
              >
                <Text style={styles.blogText}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    borderTopWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  blogText: {
    fontSize: 18,
    width: 350,
    height: 70,
    padding: 15,
  },
  icon: {
    fontSize: 30,
    color: "black",
    padding: 15,
  },
});

export default IndexScreen;
