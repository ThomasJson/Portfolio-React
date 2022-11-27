import "./articleScreen.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container } from "react-bootstrap";
import Comment from "../../components/comment/Comment";
import { AuthContext } from "../../contexts/AuthContext";

const ArticleScreen = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(null);

  const [pseudo, setPseudo] = useState(null);
  console.log("pseudo:", pseudo);
  
  const { auth } = useContext(AuthContext);
  console.log("auth:", auth);

  useEffect(() => {
    fetch("http://portfolio-api/comment/*", {
      method: "POST",
      body: JSON.stringify({
        with: ["account"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setComments(json);
      });
  }, []);

  useEffect(() => {
    fetch("http://portfolio-api/app_user/" + auth.id, {
      method: "POST",
      body: JSON.stringify({
        with: ["account"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setPseudo(json);
      });
  }, []);

  const { data, loading, error, text } = useFetch("article/" + id, {
    method: "POST",
    body: JSON.stringify({ with: ["image", "category"] }),
  });

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.log(error, text);
    return <div>Error !</div>;
  }

  return (
    <>
      <main>
        <Container fluid className="singleArticle-container">
          <h1 className={data.data[0]?.with[1]?.title}>
            {data.data[0]?.with[1]?.title}
          </h1>
          <h2>{data.data[0]?.title}</h2>
          <Container className="image-content-bloc">
            <img
              src={data.data[0]?.with[0]?.src}
              alt={data.data[0]?.with[0]?.alt}
              className="img-spacing"
            />
            <p className="content">{data.data[0]?.content}</p>
          </Container>
        </Container>
        <Container fluid className="comments-bloc">
          
          {comments?.data.map((comment) => {

            if (comment.Id_article === id) {
              return (
                <div key={comment.Id_comment}>
                  <Comment
                    content={comment.content}
                    author={comment?.with[0].pseudo}
                    date={comment.created_at}
                  />
                </div>
              );
            }
          })}

          {auth.role > 0 && (
            <Container fluid className="comment-container">
              {pseudo?.data[0].with[0].pseudo}
            </Container>
          )}

        </Container>
      </main>
    </>
  );
};

export default ArticleScreen;
