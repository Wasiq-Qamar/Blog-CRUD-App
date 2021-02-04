import createDataContext from "./createDataConext";
import jsonserver from "../api/jsonserver";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonserver.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const res = await jsonserver.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    const res = await jsonserver.put(`/blogposts/${id}`, {
      id,
      title,
      content,
    });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
