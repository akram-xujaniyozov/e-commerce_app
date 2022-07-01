const initState = {
  productByCategory: [],
};

const searchByCategory = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_BYCAT":
      return {
        ...state,
        productByCategory: action.payload,
      };

    default:
      return state;
  }
};

export default searchByCategory;
