import { FETCH_START, FETCH_WAS_SUCCESS, FETCH_FAILURE,} from '../actions';


const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    
    case FETCH_WAS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: [...state.characters, action.payload]
      };

    case FETCH_FAILURE:
      return{
        ...state,
        error: action.payload,
        isFetching: false
      };
    
    default:
      return state;
  }
};
