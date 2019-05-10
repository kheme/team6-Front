import { AUTH_USER_SUCCESS } from "./types";

export const Signin = () => async dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESS,
    token: "ddksnaijdijsidisudisduisdsidusids",
    user: {
      firstname: "Everistus"
    }
  });
};
