import "./comment.scss";
import React from "react";
import { Container } from "react-bootstrap";

const Comment = ({ content, author, date, border }) => {
  return (
    <>
      <Container fluid className={"comment-container " + border}>
        <Container className="rOw align-center">
          <Container className="comment-bloc author">{author}</Container>
          <Container className="comment-bloc date">publié le {date}</Container>
        </Container>
        <Container fluid className="comment-content">
          {content}
        </Container>
      </Container>
    </>
  );
};

export default Comment;
