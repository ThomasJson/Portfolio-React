import "./article.scss";
import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Article = ({ title, content, category, src, alt, color }) => {
  return (
    <>
      <Card className="card-style" style={{ width: "18rem" }}>
        
        <Card.Body>
          <Container className={color}>{category}</Container>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Img variant="top" className="img-style" src={src} alt={alt} />
        </Card.Body>
        
      </Card>
    </>
  );
};

export default Article;
