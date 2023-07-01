import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchComments } from '../store/postReducer';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const comments = useSelector((state) => state.posts.comments);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const loadComments = (postId) => {
    if (comments[postId]) {
      dispatch({ type: 'SET_COMMENTS', payload: { postId, comments: [] } });
    } else {
      dispatch(fetchComments(postId));
    }
  };

  return (
    <div>
      <h4>Post List</h4>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3 onClick={() => loadComments(post.id)}>{post.title}</h3>
            {comments[post.id] && (
              <ul>
                {comments[post.id].map((comment) => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
