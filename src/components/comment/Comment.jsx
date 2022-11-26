import "./comment.scss";
import React from "react";
import { Container } from "react-bootstrap";

const Comment = ({ content, author, date }) => {
  return (
    <>
      <Container fluid className="comment-container">
        <Container>{author}</Container>
        <Container>{content}</Container>
        <Container>{date}</Container>
      </Container>
    </>
  );
};

export default Comment;
