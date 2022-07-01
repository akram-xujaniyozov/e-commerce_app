export const searchByCategory = (payload) => ({
  type: "SEARCH_BYCAT",
  payload,
});

export const fetchSearchByCategory = (name, category) => async (dispatch) => {
  await fetch(
    `http://localhost:3001/api/product?name=${name}&category=${category}`
  )
    .then((response) => response.json())
    .then(({ products }) => dispatch(searchByCategory(products)))
    .catch((err) => console.log(err));
};
