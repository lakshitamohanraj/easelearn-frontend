import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import  teacherProfileReducer from "./TeacherProfile/Reducer";


const rootReducers=combineReducers({

    auth:authReducer,
    teacherProfile: teacherProfileReducer,

    


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))