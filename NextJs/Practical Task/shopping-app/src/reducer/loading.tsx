const loadingReducer = (state = false, action: any) => {
  switch (action.type) {
    case "setLoadingCondition":
      return !state;

    default:
      return state;
  }
};

export default loadingReducer;
