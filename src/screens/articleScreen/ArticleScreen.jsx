import "./articleScreen.scss";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "react-bootstrap";

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

  return (
    <>
      <main>
        <Container fluid className="singleArticle-container">
          <h1>{data.data[0]?.with[1]?.title}</h1>
          <h2>{data.data[0]?.title}</h2>
          <img
            src={data.data[0]?.with[0]?.src}
            alt={data.data[0]?.with[0]?.alt}
            className="img-spacing"
          />
          <p>{data.data[0]?.content}</p>
        </Container>
      </main>
    </>
  );
};

export default ArticleScreen;
