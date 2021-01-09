import axios from '../../axios';
import * as actionTypes from '../actiontypes/actiontype';



export const MovieDetailsPage = (movieId) => async (dispatch) => {
   dispatch({type: actionTypes.MOVIE_DETAILS_LOADING})


   await axios.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
   .then(response => {
       dispatch({type: actionTypes.MOVIE_DETAILS, payload: response.data})
   })
   .catch(error => {dispatch({type:actionTypes.MOVIE_DETAILS_ERROR, error:  error})})

}

export const MovieTrailerAction = (movieId) => async (dispatch) => {
    dispatch({type: actionTypes.MOVIE_TRAILER_LOADING})
 
 
    await axios.get(`/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(response => {
        dispatch({type: actionTypes.MOVIE_TRAILER, payload: response.data})
    })
    .catch(error => {dispatch({type:actionTypes.MOVIE_TRAILER_ERROR, error:  error})})
 
 }

export const TvShowDetails = (movieId) => async (dispatch) => {
    dispatch({type: actionTypes.TV_DETAILS_LOADING})
 
 
    await axios.get(`/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(response => {
        dispatch({type: actionTypes.TV_DETAILS, payload: response.data})
    })
    .catch(error => {dispatch({type:actionTypes.TV_DETAILS_ERROR, error:  error})})
 
 }