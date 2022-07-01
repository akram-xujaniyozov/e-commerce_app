export const searchItem = (payload) => ({
  type: "SEARCH_ITEM",
  payload,
});

export const fetchSearchItem = (combinedElements) => async (dispatch) => {
  await fetch(
    `http://localhost:3001/api/product?name=${
      combinedElements ? combinedElements : `lphone`
    }`
  )
    .then((response) => response.json())
    .then(({ products }) => dispatch(searchItem(products)))
    .catch((err) => console.log(err));
};
