const initState = {
  sortItems: [],
};

const sortedAllProducts = (state = initState, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS": {
      return {
        ...state,
        sortItems: action.items,
      };
    }

    default:
      return state;
  }
};

export default sortedAllProducts;
