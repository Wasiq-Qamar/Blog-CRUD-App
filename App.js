import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import BlogScreen from "./src/screens/BlogScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const App = () => {
  return (
    <NavigationContainer initialRouteName="Home" theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={{ title: "Blogs List", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={({ route }) => ({
            title: `Blog ${route.params.id}`,
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Add Blog Post", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Edit Blog Post", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
