import "./article.scss";
import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Article = ({ title, content, category, src, alt, color, border }) => {
  return (
    <>
      <Card className={"card-style " + border} style={{ width: "15rem" }}>
        
        <Card.Body>
          <Container className={"category-text " + color}>{category}</Container>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text className="resume-style">{content.substring(0, 60) + " ..."}</Card.Text> */}
          {/* <Card.Img variant="top" className="img-style" src={src} alt={alt} /> */}
        </Card.Body>
        
      </Card>
    </>
  );
};

export default Article;
