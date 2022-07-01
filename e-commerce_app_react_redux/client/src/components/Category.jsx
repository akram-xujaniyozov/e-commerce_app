import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategory } from "../redux/actions/category";
import { setSortCategory } from "../redux/actions/filter";

const Category = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ category }) => category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const selectItemHandler = useCallback((e) => {
    dispatch(setSortCategory(e.target.value));
  }, []);

  return (
    <div className="flex-grow-1">
      <select
        onClick={selectItemHandler}
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue="all">all</option>
        {items.map((name, index) => (
          <option defaultValue={name} key={`${name}_${index}`}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
