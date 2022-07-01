export const selectedProduct = (payload) => ({
  type: "SELECT_PRODUCT",
  product: payload,
});

export const fetchOneProduct = (id) => async (dispatch) => {
  await fetch(`http://localhost:3001/api/product/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch(selectedProduct(data)))
    .catch((err) => console.log(err));
};
