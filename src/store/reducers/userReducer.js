import * as actionTypes from "../actiontypes/actiontype";


const initialState = {
    loading : false,
    userinfo: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_SIGNUP_LOADING: 
        return {
            ...state,
            loading : true
        }
        
        case actionTypes.USER_SIGNUP_SUCCESS:
          
        return {
            ...state,
            loading: false,
            userinfo: action.payload
        }

        case actionTypes.USER_SIGNUP_ERROR:

        return {
            ...state,
            loading: false,
            error: action.payload
        }

        case actionTypes.USER_LOGIN_LOADING:

        return {
            ...state,
           loading: true
        }

        case actionTypes.USER_LOGIN_SUCCESS:

        return {
            ...state,
            loading: false,
            userinfo: action.payload
        }

        case actionTypes.USER_LOGIN_ERROR:

        return {
            ...state,
            loading: false,
            error: action.payload
        }
  case actionTypes.USER_LOGOUT:
      return {
          ...state,
          loading: false
      }
        default:
            return state
    }
}

export default reducer;