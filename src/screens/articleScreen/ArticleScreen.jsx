import "./articleScreen.scss";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ArticleScreen = () => {
  const { id } = useParams();

  const { data, loading, error, text } = useFetch("article/" + id, {
    method: "POST",
    body: JSON.stringify({ with: ["image", "category"] }),
  });

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }
  console.log("data:", data);
  return <div>Un article</div>;
};

export default ArticleScreen;
