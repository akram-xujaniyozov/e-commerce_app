export const setCategory = (payload) => ({
  type: "SET_CATEGORY",
  items: payload,
});

export const fetchCategory = () => async (dispatch) => {
  await fetch("http://localhost:3001/api/category")
    .then((response) => response.json())
    .then((category) => dispatch(setCategory(category)))
    .catch((err) => console.log(err));
};
