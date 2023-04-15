import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectApiLoading, selectApiError } from "../redux/apiSlice";

import { RootState } from "../redux/store";

import { useEffect } from "react";
import { FAQItem } from "../components/FAQItem";
import { LoadingPage } from "../components/Loader";

const FAQPage: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.api);
  const loading = useSelector(selectApiLoading);
  const error = useSelector(selectApiError);

  const renderList1 = (): JSX.Element[] => {
    if (posts.data) {
      let index2 = Math.round(posts.data.content.items.length / 2);
      return posts.data.content.items.map((person, index) => {
        return index >= index2 ? (
          <FAQItem info={person} index={index} />
        ) : (
          <></>
        );
      });
    } else {
      return [];
    }
  };

  const renderList2 = (): JSX.Element[] => {
    if (posts.data) {
      let index2 = Math.round(posts.data.content.items.length / 2);
      return posts.data.content.items.map((person, index) => {
        return index < index2 ? <FAQItem info={person} index={index} /> : <></>;
      });
    } else {
      return [];
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadingPage />}
      {error && <p>Error: {error}</p>}

      <div className="div2">{renderList2()}</div>
      <div className="div1">{renderList1()}</div>
    </>
  );
};

export { FAQPage };
