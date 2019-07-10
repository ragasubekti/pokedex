import { GET_POKEMON_TYPE, GET_POKEMON_TYPE_SUCCESS } from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_TYPE:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_POKEMON_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
};
