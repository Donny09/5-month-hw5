
const initialState = {
    items: [],
    comments: {},
  };
  
  export const fetchPosts = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
  
        dispatch({ type: 'SET_POSTS', payload: data });
      } catch (error) {
        console.log("Ошибка");
      }
    };
  };
  
  export const fetchComments = (postId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const data = await response.json();
  
        dispatch({ type: 'SET_COMMENTS', payload: { postId, comments: data } });
      } catch (error) {
        console.log("Ошибка");
      }
    };
  };
  
  export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          items: action.payload,
        };
      case 'SET_COMMENTS':
        return {
          ...state,
          comments: {
            ...state.comments,
            [action.payload.postId]: action.payload.comments,
          },
        };
      default:
        return state;
    }
  };
  