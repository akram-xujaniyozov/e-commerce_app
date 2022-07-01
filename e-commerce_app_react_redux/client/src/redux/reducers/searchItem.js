const initState = {
  itemProduct: [],
};

const searchItem = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_ITEM":
      return {
        ...state,
        itemProduct: action.payload,
      };

    default:
      return state;
  }
};

export default searchItem;
