const initState = {
  productName: "lphone",
};

const searchProduct = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return {
        ...state,
        productName: action.payload,
      };

    default:
      return state;
  }
};

export default searchProduct;
