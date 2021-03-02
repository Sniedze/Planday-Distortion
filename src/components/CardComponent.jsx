import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

const CardComponent = (props) => {
  const { title, description, imagePath } = props;

  return (
    <Card>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardImg top width="100%" src={imagePath} alt="Card image cap" />
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
