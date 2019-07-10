import {
  GET_POKELIST,
  GET_POKELIST_SUCCESS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_TYPE,
  GET_POKEMON_TYPE_SUCCESS,
  GET_POKELIST_AND_RESET
} from "./actions";

const initialState = {
  list: {
    isLoading: false,
    hasError: false,
    errorMessage: "",
    data: [],
    pagination: {
      currentPage: 1,
      hasNext: false,
      total: 0
    }
  },
  types: {
    isLoading: false,
    hasError: false,
    errorMessage: "",
    data: []
  },
  filter: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKELIST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          hasError: false
        }
      };
    case GET_POKELIST_AND_RESET:
      return {
        ...state,
        list: {
          ...state.list,
          data: [],
          isLoading: true,
          hasError: false
        }
      };
    case GET_POKELIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data:
            state.list.data.length <= 0 ||
            // state.list.pagination.currentPage !== action.payload.page ||
            state.list.pagination.currentPage < action.payload.page
              ? state.list.data.concat(action.payload.data)
              : state.list.data,
          pagination: {
            ...state.list.pagination,
            hasNext: action.payload.hasNext,
            currentPage: action.payload.page,
            total: action.payload.total
          }
        }
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        list: {
          ...state.list,
          data: state.list.data.map((item, index) => {
            if (index === action.payload.id) {
              return {
                ...item,
                isLoading: true
              };
            }

            return item;
          })
        }
      };
    case GET_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          data: state.list.data.map((item, index) => {
            if (index === action.payload.id) {
              return {
                ...item,
                isLoading: false,
                ...action.payload.data
              };
            }

            return item;
          })
        }
      };
    case GET_POKEMON_TYPE:
      return {
        ...state,
        types: {
          ...state.types,
          isLoading: true,
          hasError: false
        }
      };
    case GET_POKEMON_TYPE_SUCCESS:
      return {
        ...state,
        types: {
          ...state.types,
          isLoading: false,
          data: action.payload.data
        }
      };

    default:
      return state;
  }
};
