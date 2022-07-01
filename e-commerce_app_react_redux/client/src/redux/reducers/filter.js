const initState = {
  categoryName: "all",
};

const sortCategory = (state = initState, action) => {
  switch (action.type) {
    case "SORT_CATEGORY":
      return {
        ...state,
        categoryName: action.payload,
      };
    default:
      return state;
  }
};

export default sortCategory;
