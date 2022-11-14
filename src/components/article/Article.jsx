import "./article.scss";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Article = ({title, content, image, category}) => {
  return (
    <>
      <Card className="card-spacing" style={{ width: "18rem" }}>
        {/* <Container>{}</Container>
        <Card.Img variant="top" src={} /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
          <Button variant="primary">Lire l'article</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Article;
