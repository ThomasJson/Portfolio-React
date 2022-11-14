import "./blogScreen.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Article from "../../components/article/Article";

const BlogScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://portfolio-api/article", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((json) => {
        setArticles(json);
      });
  }, []);

  console.log(articles);

  return (
    <main>
      <Container className="blog-container">
        {/* // TODO Rajouter la category-nav */}

        {articles.data?.map((article) => {
          return (
            <Container key={article.Id_article}>
              <Article title={article.title} content={article.content} />
            </Container>
          );
        })}
      </Container>
    </main>
  );
};

export default BlogScreen;
