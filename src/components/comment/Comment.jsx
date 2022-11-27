import "./comment.scss";
import React from "react";
import { Container } from "react-bootstrap";

const Comment = ({ content, author, date }) => {
  return (
    <>
      <Container fluid className="comment-container">
        <Container>{author}</Container>
        <Container fluid className="comment-content">{content}</Container>
      </Container>
    </>
  );
};

export default Comment;
