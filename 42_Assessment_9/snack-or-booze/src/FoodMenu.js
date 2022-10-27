import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";


function FoodMenu({ food, type }) {

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="cardTitle" >
            {`${type} Menu`}
          </CardTitle>
          <CardText>
          </CardText>
          <ListGroup>
            {food.map(snack => (
              <Link to={`/${type}/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
