import "./articleScreen.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Button, Container } from "react-bootstrap";
import Comment from "../../components/comment/Comment";
import { AuthContext } from "../../contexts/AuthContext";
import doFetch from "../../helpers/fetchHelper";

const ArticleScreen = () => {
  const { id } = useParams();

  const [comments, setComments] = useState(null);
  const [pseudo, setPseudo] = useState(null);
  const [article, setArticle] = useState(null);

  console.log('article:', article)
  
  const { auth } = useContext(AuthContext);

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

  useEffect(() => {
    fetch("http://portfolio-api/article/" + id, {
      method: "POST",
      body: JSON.stringify({
        with: ["image", "category"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setArticle(json);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);

    const items = [];
    const assocArray = {"content": jsonData}

    const { data } = await doFetch("comment", {
      method: "PUT",
      body: JSON.stringify([items[assocArray]]),
    });

    console.log("data:", data);
  }

  return (
    <>
      <main>
        <Container fluid className="singleArticle-container">
          <h1 className={article?.data[0]?.with[1]?.title}>
            {article?.data[0]?.with[1]?.title}
          </h1>
          <h2>{article?.data[0]?.title}</h2>
          <Container className="image-content-bloc">
            <img
              src={article?.data[0]?.with[0]?.src}
              alt={article?.data[0]?.with[0]?.alt}
              className="img-spacing"
            />
            <p className="content">{article?.data[0]?.content}</p>
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
                    date={new Date(comment.created_at).toLocaleDateString()}
                  />
                </div>
              );
            }
          })}

          {auth.role > 0 && (
            <form 
            onSubmit={handleSubmit}
            >
              <Container fluid className="comment-container">
                {pseudo?.data[0].with[0].pseudo}
                <Container fluid className="comment-content">
                  <input
                    id="com-input"
                    type="text"
                    placeholder="Laissez un commentaire"
                    name="content"
                    className="input-style w-100"
                  />
                </Container>
                <Button type="submit" className="mt-2">
                  Poster
                </Button>
              </Container>
            </form>
          )}
        </Container>
      </main>
    </>
  );
};

export default ArticleScreen;
