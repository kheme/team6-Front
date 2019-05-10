import { AUTH_USER_SUCCESS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: null,
  isLoading: false
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
