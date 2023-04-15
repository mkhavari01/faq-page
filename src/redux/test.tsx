import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts, selectPostsLoading, selectPostsError } from './apiSlice';

import { RootState } from './store';
import { incrementAction,decrementAction } from './actions';

import {useEffect} from 'react'

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const posts = useSelector((state: RootState) => state.posts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch(incrementAction())}>Increment</button>
      <button onClick={()=>dispatch(decrementAction())}>Decrement</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {console.log("posts are",posts)!}

      <ul>
        {posts.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export {Counter}