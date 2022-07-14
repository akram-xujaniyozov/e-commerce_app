import React from 'react';

const Details = ({ product }) => {
  return (
    <div style={{ width: '30rem' }} className="d-flex flex-column justify-content-evenly">
      <h1 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-2 lh-base">
        <span>Brand: </span>
        {product.brand}
      </h1>
      <h2 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-3 lh-base">
        <span>Title: </span>
        {product.title}
      </h2>
      <h3 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-4 lh-base">
        <span>Category: </span>
        {product.category}
      </h3>
      <h4 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-5 lh-base">
        <span>Description: </span>
        {product.description}
      </h4>
      <h5 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-6 lh-base">
        <span>Discount Percentage: </span>
        {product.discountPercentage}
      </h5>
      <h6 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-6 lh-base">
        <span>Price: </span>
        {product.price}
      </h6>
      <h6 style={{ letterSpacing: '.1rem' }} className="mb-4 fw-light fs-6 lh-base">
        <span>Rating: </span>
        {product.rating}
      </h6>
      <h6 style={{ letterSpacing: '.1rem' }} className="fw-light fs-6 lh-base">
        <span>Stock: </span>
        {product.stock}
      </h6>
    </div>
  );
};

export default Details;
