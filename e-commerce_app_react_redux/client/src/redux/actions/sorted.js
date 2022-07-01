export const sortedProducts = (payload) => ({
  type: "SORT_PRODUCTS",
  items: payload,
});

export const fetchSorted = (categoryName) => async (dispatch) => {
  await fetch(`http://localhost:3001/api/product?category=${categoryName}`)
    .then((response) => response.json())
    .then(({ products }) => dispatch(sortedProducts(products)))
    .catch((err) => console.log(err));
};
