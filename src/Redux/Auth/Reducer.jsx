import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGOUT,
  } from "./ActionTypes";
  
  const initialState = {
    user: null,
    isLoading: false,
    error: null,
    role: ""
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
        return { ...state, isLoading: true, error: null };
      case REGISTER_SUCCESS:
        return { ...state, isLoading: false , 
          user: action.payload.user,
          role : action.payload.role 
      };
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false ,
          user: action.payload.user, // user update
          role: action.payload.role // role update
         };
      case GET_USER_REQUEST:
        return { ...state, isLoading: true, error: null };
      case GET_USER_SUCCESS:
        return { ...state, isLoading: false, user: action.payload };
      case GET_USER_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
        case LOGOUT:
          localStorage.removeItem("jwt");
          return { ...state, jwt: null, user: null ,role:""};
      default:
        return state;
    }
  };
  
  export default authReducer;