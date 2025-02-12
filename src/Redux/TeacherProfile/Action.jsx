import axios from "axios";
import {
  TEACHER_PROFILE_REQUEST,
  TEACHER_PROFILE_SUCCESS,
  TEACHER_PROFILE_FAILURE,
  UPDATE_TEACHER_PROFILE,
  CLEAR_TEACHER_PROFILE,
} from "./ActionTypes";
import { API_BASE_URL } from "../../config/api"; // Define your API base URL here
import { useSelector } from 'react-redux';

// Action to submit the teacher profile form
export const submitTeacherProfile = (profileData, jwt) => async (dispatch) => {
    // const formDataObject = {};
    // profileData.forEach((value, key) => {
    //     formDataObject[key] = value;
    // });
    // console.log(formDataObject);
      try {
    dispatch({ type: TEACHER_PROFILE_REQUEST });
    const auth = useSelector((state)=>state.auth);
    const userId = auth.userId; 
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "multipart/form-data",
      },
    };
    
     console.log(userId,profileData);
    const {data}  = await axios.post(`${API_BASE_URL}/profile/create/${userId}`, profileData);
    console.log("profile data savedddd (Save me) "+data);

    dispatch({
      type: TEACHER_PROFILE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: TEACHER_PROFILE_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Action to update teacher profile in Redux store
export const updateTeacherProfile = (updatedData) => ({
  type: UPDATE_TEACHER_PROFILE,
  payload: updatedData,
});

// Action to clear teacher profile (useful on logout)
export const clearTeacherProfile = () => ({
  type: CLEAR_TEACHER_PROFILE,
});
