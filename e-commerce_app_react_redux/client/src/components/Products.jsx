import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getElementID } from "../redux/actions/getID";

const Products = ({ items }) => {
  const dispatch = useDispatch();

  const selectIdItem = useCallback((e) => {
    const elementID = Number(e.currentTarget.id);
    dispatch(getElementID(elementID));
  }, []);

  return (
    <div>
      <ul className="d-flex flex-row align-items-center justify-content-center flex-wrap ps-0">
        {items.map((item) => (
          <li
            key={item.id}
            className="card me-3 mt-3 shadow p-3 mb-5 bg-body rounded"
            style={{ width: "25rem" }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ display: "inline-block", height: "13rem" }}
            />
            <h5 className="card-title text-center m-2 p-2 fs-5 text-truncate">
              {item.title}
            </h5>
            <p className="card-text text-truncate text-center m-2 p-2 mt-0">
              {item.description}
            </p>
            <Link
              to={`/product/${item.id}`}
              className="btn btn-primary w-50 m-auto mb-3 text-uppercase"
              onClick={selectIdItem}
              id={item.id}
            >
              See More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
