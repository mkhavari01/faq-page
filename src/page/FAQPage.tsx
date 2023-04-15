import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostsLoading, selectPostsError } from '../redux/apiSlice';

import { RootState } from '../redux/store';

import {useEffect} from 'react'

function FAQPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  

  function renderData(){
    if (posts.data) {
      console.log(posts.data.content.items)
    }
  }

  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])

  return (
    <div>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {renderData()!}

    </div>
  );
}

export {FAQPage}