import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/actions/search";

import { fetchSearchItem } from "../redux/actions/searchItem";

const Search = () => {
  const dispatch = useDispatch();

  const { productName } = useSelector(({ search }) => search);

  let addSign = "";
  for (let i = 1; i < productName.length; i++) {
    addSign += "%20" + productName[i];
  }
  let firstElement = productName[0];

  firstElement += addSign;

  const handlerChange = (e) => {
    const convertArr = e.target.value.split(" ");
    dispatch(searchProduct(convertArr));
  };

  useEffect(() => {
    dispatch(fetchSearchItem(firstElement));
  }, [firstElement]);

  return (
    <div className="flex-grow-1 ms-5 me-5">
      <form className="d-flex">
        <input
          onChange={handlerChange}
          className="form-control w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <span className="input-group-text bg-primary" id="basic-addon1">
          <i className="bi bi-search text-light"></i>
        </span>
      </form>
    </div>
  );
};

export default Search;
