const initState = {
  product: {},
};

const selectedProduct = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};

export default selectedProduct;
