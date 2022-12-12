import "./articleScreen.scss";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Comment from "../../components/comment/Comment";
import { AuthContext } from "../../contexts/AuthContext";
import doFetch from "../../helpers/fetchHelper";
import BlogFooter from "../../components/blogFooter/BlogFooter";

const ArticleScreen = () => {
  const { id } = useParams();

  const [comments, setComments] = useState(null);
  console.log("comments:", comments);

  const [pseudo, setPseudo] = useState(null);
  // console.log("pseudo:", pseudo);

  const [article, setArticle] = useState(null);
  // console.log("article:", article);

  const { auth } = useContext(AuthContext);
  // console.log("auth:", auth);

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
  }, [auth]);

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
    const value = document.getElementById("com-input").value;

    function formatDate(date) {
      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 101).toString().substring(1);
      var day = (date.getDate() + 100).toString().substring(1);
      return day + "-" + month + "-" + year;
    }

    const { data } = await doFetch("comment", {
      method: "PUT",
      body: JSON.stringify({
        items: [
          {
            content: value,
            Id_article: id,
            Id_account: pseudo?.data[0]?.with[0]?.Id_account,
            created_at: formatDate(new Date()),
          },
        ],
      }),
    });

    console.log("data:", data);
  };

  return (
    <>
      <main>
        <div className="singleArticle-section">
          <div className="singleArticle-container">
            <Container
              fluid
              className={"article-bg " + article?.data[0]?.with[1]?.title}
            >
              <Container className="align-category-title">
                <h1
                  className={
                    "category-text " + article?.data[0]?.with[1]?.title
                  }
                >
                  {article?.data[0]?.with[1]?.title + " I"}
                </h1>
                <h2>{article?.data[0]?.title}</h2>
              </Container>

              <Container fluid className="image-content-bloc">
                {/* <img
                  src={article?.data[0]?.with[0]?.src}
                  alt={article?.data[0]?.with[0]?.alt}
                  className="img-spacing"
                /> */}
                <p className="content">{article?.data[0]?.content}</p>
              </Container>
            </Container>
          </div>

          <div className="comments-bloc">
            {/* // TODO .filter() */}
            {comments?.data.map((comment) => {
              if (comment.Id_article === id) {
                return (
                  <div
                    className="comment-section-bloc"
                    key={comment.Id_comment}
                  >
                    <Comment
                      content={comment.content}
                      author={comment?.with[0]?.pseudo}
                      date={comment.created_at}
                      border={article?.data[0]?.with[1]?.title}
                    />
                  </div>
                );
              }
            })}

            {auth.role > 0 && (
              <form onSubmit={handleSubmit}>
                <Container
                  fluid
                  className={
                    "comment-container " + article?.data[0]?.with[1]?.title
                  }
                >
                  {/* <Container className="aquamarine">
                    {pseudo?.data[0]?.with[0]?.pseudo}
                  </Container> */}
                  <div className="align-input-btn">
                    <div fluid className="comment-input">
                      <input
                        id="com-input"
                        type="text"
                        placeholder="Laissez un commentaire"
                        name="content"
                        autoComplete="off"
                        onInput={() => {
                          const input = document.getElementById("com-input");
                          input.classList.add("onInput");
                        }}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="btn-style no-radius btn-post"
                    >
                      Poster
                    </Button>
                  </div>
                </Container>
              </form>
            )}
          </div>
        </div>
      </main>
      <BlogFooter />
    </>
  );
};

export default ArticleScreen;
