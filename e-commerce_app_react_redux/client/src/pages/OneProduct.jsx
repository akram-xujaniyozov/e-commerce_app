import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Details from "../components/Details";
import DetailsImage from "../components/DetailsImage";
import { fetchOneProduct } from "../redux/actions/oneProduct";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(({ oneProduct }) => oneProduct);
  const { id } = useSelector(({ getID }) => getID);

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, []);

  return (
    <div className="container-lg d-flex flex-row justify-content-evenly bg-dark h-100 w-100 mt-4 mb-4 m-auto p-5 text-white">
      <DetailsImage product={product} />
      <Details product={product} />
    </div>
  );
};

export default Product;
