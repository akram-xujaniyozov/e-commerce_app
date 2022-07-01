import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/actions/products";
import { fetchSorted } from "../redux/actions/sorted";
import { fetchSearchByCategory } from "../redux/actions/searchByCat";

import Products from "../components/Products";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ products }) => products);
  const { sortItems } = useSelector(({ sorted }) => sorted);
  const { itemProduct } = useSelector(({ searchItem }) => searchItem);
  const { productByCategory } = useSelector(({ searchByCat }) => searchByCat);
  const { categoryName } = useSelector(({ filters }) => filters);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProcductPerPage] = useState(3);

  const { productName } = useSelector(({ search }) => search);

  let addSign = "";
  for (let i = 1; i < productName.length; i++) {
    addSign += "%20" + productName[i];
  }
  let firstElement = productName[0];

  firstElement += addSign;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchSorted(categoryName));
  }, [categoryName]);

  useEffect(() => {
    dispatch(fetchSearchByCategory(firstElement, categoryName));
  }, [firstElement, categoryName]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current products

  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  let currentProducts =
    (productByCategory != 0 &&
      productByCategory.slice(indexFirstProduct, indexLastProduct)) ||
    (itemProduct != 0 &&
      itemProduct.slice(indexFirstProduct, indexLastProduct)) ||
    (sortItems != 0 && sortItems.slice(indexFirstProduct, indexLastProduct)) ||
    items.slice(indexFirstProduct, indexLastProduct);

  if (currentProducts == 0 && productByCategory != 0) {
    currentProducts = productByCategory;
  } else if (currentProducts == 0 && itemProduct != 0) {
    currentProducts = itemProduct;
  } else if (currentProducts == 0 && sortItems != 0) {
    currentProducts = sortItems.slice(0, 3);
  }

  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <div className="m-4">
      {isLoaded ? <Products items={currentProducts} /> : <p>Loading...</p>}
      <Pagination
        productPerPage={productPerPage}
        // totalItems={sortItems != 0 ? sortItems.length : items.length}
        totalItems={
          productByCategory.length ||
          itemProduct.length ||
          sortItems.length ||
          items.length
        }
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
