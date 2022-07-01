const initState = {
  id: 0,
};

const elementID = (state = initState, action) => {
  switch (action.type) {
    case "GET_ID":
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
};

export default elementID;
