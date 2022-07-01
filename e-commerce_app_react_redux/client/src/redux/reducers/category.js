const initState = {
  items: [],
};

const category = (state = initState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default category;
