import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderItems = products.map((product) => {
    const { id, title, description, image, category } = product;
    return (
      <Card
        className="p-3 mx-4 text-center"
        key={id}
        style={{
          width: "18rem",
          cursor: "pointer",
        }}
      >
        <Link to={`/products/${id}`}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="text-muted">{category}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  });
  return <>{renderItems}</>;
}

export default ProductComponent;
