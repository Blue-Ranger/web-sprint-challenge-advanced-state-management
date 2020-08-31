import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  START_POST,
  POST_SUCCESS,
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        smurfs: [...state.smurfs, ...action.payload],
      };

    default:
      return state;
  }
};
export default Reducer;
