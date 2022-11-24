import "./article.scss";
import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Article = ({ title, content, image, category, src, alt }) => {
  return (
    <>
      <Card className="card-spacing" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} alt={alt} />
        <Container>{category}</Container>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Article;
