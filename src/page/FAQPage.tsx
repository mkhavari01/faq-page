import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  selectPostsLoading,
  selectPostsError,
} from "../redux/apiSlice";

import { RootState } from "../redux/store";

import { useEffect } from "react";
import { FAQItem } from "../components/FAQItem";

const FAQPage: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  const renderList = (): JSX.Element[] => {
    if (posts.data) {
      return posts.data.content.items.map((person, index) => {
        return <FAQItem info={person} index={index} />;
      });
    } else {
      return [];
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {renderList()}
    </>
  );
};

export { FAQPage };
