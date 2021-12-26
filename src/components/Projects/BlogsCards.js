import React from "react";
import Card from "react-bootstrap/Card";
import { BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";

function BlogsCards(props) {
  return (
    <Link to="/">
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer>
          <BsLink />
          &nbsp;
          {props.title}
          <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default BlogsCards;