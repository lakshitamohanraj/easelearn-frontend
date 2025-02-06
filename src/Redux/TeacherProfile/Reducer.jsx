import {
    TEACHER_PROFILE_REQUEST,
    TEACHER_PROFILE_SUCCESS,
    TEACHER_PROFILE_FAILURE,
    UPDATE_TEACHER_PROFILE,
    CLEAR_TEACHER_PROFILE,
  } from "./ActionTypes";
  
  const initialState = {
    profile: null,
    loading: false,
    error: null,
  };
  
  const teacherProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case TEACHER_PROFILE_REQUEST:
        return { ...state, loading: true, error: null };
      
      case TEACHER_PROFILE_SUCCESS:
        return { ...state, loading: false, profile: action.payload };
      
      case TEACHER_PROFILE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      
      case UPDATE_TEACHER_PROFILE:
        return { ...state, profile: { ...state.profile, ...action.payload } };
      
      case CLEAR_TEACHER_PROFILE:
        return initialState;
      
      default:
        return state;
    }
  };
  
  export default teacherProfileReducer;
  