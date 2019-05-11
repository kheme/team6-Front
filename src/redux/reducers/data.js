import { FILTER_DATA, DATA_CHANGE } from "../actions/types";

const initialState = {
  data: {},
  isLoading: false,
  filteredData: null
};

export default function data(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        data: action.data,
        filteredData: null
      };
    case DATA_CHANGE:
      return {
        ...state,
        filteredData: action.data
      };
    default:
      return state;
  }
}
