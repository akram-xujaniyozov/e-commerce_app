export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setProducts = (items) => {
  return { type: "SET_PRODUCTS", payload: items };
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoaded(false));

  await fetch("http://localhost:3001/api/product?offset=0&limit=30")
    .then((res) => res.json())
    .then(({ products }) => dispatch(setProducts(products)))
    .catch((err) => console.log(err));
};
