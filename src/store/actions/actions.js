import * as actionTypes from "../actiontypes/actiontype";
import axios from "../../axios";

export const FetchDataOriginals = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_DATA_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.FETCH_DATA, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.FETCH_DATA_ERROR, payload: error });
    });
};

export const FetchDataTrending = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.TRENDING_NOW_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.TRENDING_NOW, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.TRENDING_NOW_ERROR, payload: error });
    });
};

export const FetchDataToprated = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.TOP_RATED_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.TOP_RATED, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.TOP_RATED_ERROR, payload: error });
    });
};

export const FetchDataRomance = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.ROMANCE_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.ROMANCE, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.ROMANCE_ERROR, payload: error });
    });
};

export const FetchDataAction = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.ACTION_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.ACTION, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.ACTION_ERROR, payload: error });
    });
};

export const FetchDataHorror = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.HORROR_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.HORROR, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.HORROR_ERROR, payload: error });
    });
};

export const FetchDataComedy= (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.COMEDY_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.COMEDY, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.COMEDY_ERROR, payload: error });
    });
};

export const FetchDataFamily = (dataUrl) => async (dispatch) => {
  dispatch({ type: actionTypes.FAMILY_LOADING });
  await axios
    .get(dataUrl)
    .then((newdata) => {
      console.log(newdata);
      dispatch({ type: actionTypes.FAMILY, payload: newdata.data.results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.FAMILY_ERROR, payload: error });
    });
};
