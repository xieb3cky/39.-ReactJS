import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ snacks, drinks, cantFind }) {
  const { type, id } = useParams();


  let foodCategory;

  if (type === "drinks") {
    foodCategory = drinks;
  } else {
    foodCategory = snacks;
  }

  let snack = foodCategory.find(item => item.id === id);

  if (!snack) return <Navigate to={`/${type}`} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}


export default FoodItem;
