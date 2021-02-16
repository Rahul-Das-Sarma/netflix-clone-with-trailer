import * as actionTypes from '../actiontypes/actiontype';
import { auth } from  "../../firebase";

export const userSignUp = (email, password) => async dispatch => {
    dispatch({type: actionTypes.USER_SIGNUP_LOADING})
    try{
       await auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
        dispatch({type: actionTypes.USER_SIGNUP_SUCCESS, payload: userCredentials.user})
       })        
    }
    catch {
        dispatch({type: actionTypes.USER_SIGNUP_ERROR, payload: "Failed to create an account"})
    }
     
}

export const userLogin = (email, password) => async dispatch => {
    dispatch({type: actionTypes.USER_LOGIN_LOADING})

    try{
        await auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            dispatch({type: actionTypes.USER_LOGIN_SUCCESS, payload: userCredentials.user})
        }) 
    }
    catch {
        dispatch({type: actionTypes.USER_LOGIN_ERROR, payload: "Failed to Sign in Please Try Again"})
    }
}

export const userSignOut = () => async dispatch => {
    auth.signOut().then(() => dispatch({type: actionTypes.USER_LOGOUT}))
}