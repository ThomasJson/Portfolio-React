import "./blogScreen.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Article from "../../components/article/Article";
import useFetch from "../../hooks/useFetch";

const BlogScreen = () => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch("http://portfolio-api/article", {
  //     method: "GET",
  //   })
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setArticles(json);
  //     });
  // }, []);

  // console.log(articles);

  const { data, loading, error, text } = useFetch("article");

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }

  return (
    // <main>
    //   <Container className="blog-container">
    //     {articles.data?.map((article) => {
    //       return (
    //         <Article
    //           key={article.Id_article}
    //           title={article.title}
    //           content={article.content}
    //         />
    //       );
    //     })}
    //   </Container>
    // </main>

    <main>
      <h1>Blog Screen !</h1>
      {data &&
        data?.data.map((article, i) => {
          return (
          <div key={i}>
            <Article
              key={article.Id_article}
              title={article.title}
              content={article.content}
            />
          </div>);
        })}
    </main>
  );
};

export default BlogScreen;
