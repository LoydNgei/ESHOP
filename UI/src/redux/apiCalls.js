import { loginStart, loginSuccess, loginFailure, logoutUser } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        if (err.response) {
          // The error is from the server response
          console.error("Server error:", err.response.data);
          if (err.response.status === 401) {
            // Handle incorrect credentials error
            console.error("Incorrect credentials");
            // You can dispatch an action or update the state to indicate incorrect credentials
          }
        } else {
          // An unexpected error occurred
          console.error("Unexpected error:", err.message);
        }
        dispatch(loginFailure());
    }
};

// DISPATCH USER LOGOUT

const logout = (dispatch) => {
    dispatch((logoutUser()));
  };
  
export default logout;