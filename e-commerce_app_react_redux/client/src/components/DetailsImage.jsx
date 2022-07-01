import React from "react";

const DetailsImage = ({ product }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4">
      <div className="border border-light border-1">
        <img
          src={product.thumbnail}
          alt="Main photo"
          style={{ height: "25rem", width: "30rem" }}
        />
      </div>
      <div
        className="mt-4 d-flex flex-row justify-content-between"
        style={{ width: "100%" }}
      >
        {product.images.map((img, i) => {
          return (
            <img
              style={{ height: "5rem", width: "5rem" }}
              src={img}
              alt={`sub photo ${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailsImage;
