import React from "react";

const Details = ({ product }) => {
  return (
    <div
      style={{ width: "30rem" }}
      className="d-flex flex-column justify-content-evenly"
    >
      <h1 className="mb-4 fw-light fs-2">
        <span>Brand: </span>
        {product.brand}
      </h1>
      <h2 className="mb-4 fw-light fs-3">
        <span>Title: </span>
        {product.title}
      </h2>
      <h3 className="mb-4 fw-light fs-4">
        <span>Category: </span>
        {product.category}
      </h3>
      <h4 className="mb-4 fw-light fs-5">
        <span>Description: </span>
        {product.description}
      </h4>
      <h5 className="mb-4 fw-light fs-6">
        <span>Discount Percentage: </span>
        {product.discountPercentage}
      </h5>
      <h6 className="mb-4 fw-light fs-6">
        <span>Price: </span>
        {product.price}
      </h6>
      <h6 className="mb-4 fw-light fs-6">
        <span>Rating: </span>
        {product.rating}
      </h6>
      <h6 className="fw-light fs-6">
        <span>Stock: </span>
        {product.stock}
      </h6>
    </div>
  );
};

export default Details;
