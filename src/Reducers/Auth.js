
import {SIGN_IN, SIGN_OUT}  from '../Utils/Constants';


const AuthReducer = (state = {}, action) =>{
  switch(action.type){
    case SIGN_IN:
        return action.user;
    case SIGN_OUT:
       return {};
    default:
        return state;
  }
};

export default AuthReducer;
