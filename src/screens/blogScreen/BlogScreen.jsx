import "./blogScreen.scss";
import React from "react";
import Article from "../../components/article/Article";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const BlogScreen = () => {
  const navigate = useNavigate();

  const { data, loading, error, text } = useFetch("article/*", {
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
    <main>
      <Container fluid className="blog-container">
        {data &&
          data?.data.map((article) => {
            return (
              <div
                key={article.Id_article}
                onClick={() => {
                  navigate(`/article/${article.Id_article}`);
                }}
                className="article-spacing"
              >
                <Article
                  title={article.title}
                  content={article.content}
                  src={article.with[0]?.src}
                  alt={article.with[0]?.alt}
                  category={article.with[1]?.title}
                  color={article.with[1]?.title}
                />
              </div>
            );
          })}
      </Container>
    </main>
  );
};

export default BlogScreen;
