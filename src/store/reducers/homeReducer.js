import * as actionTypes from "../actiontypes/actiontype";

const initialState = {
  loading: false,
  useFetchedData: [],
  trendingNow: [],
  topRated: [],
  romance:[],
  horror:[],
  family: [],
  actions:[],
  comedy:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        loading: false,
        useFetchedData: action.payload,
      };

    case actionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.TRENDING_NOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.TRENDING_NOW:
      return {
        ...state,
        trendingNow: action.payload,
      };
    case actionTypes.TRENDING_NOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.TOP_RATED_LOADING:
      return {
        ...state,
        loading : true
       
      };
    case actionTypes.TOP_RATED:
        return{
         ...state,
         topRated: action.payload
    }
    case actionTypes.TOP_RATED_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.ROMANCE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.ROMANCE:
      return {
        ...state,
        romance: action.payload,
      };
    case actionTypes.ROMANCE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.ACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ACTION:
      return {
        ...state,
        actions: action.payload
      };
    case actionTypes.ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.HORROR_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.HORROR:
      return {
        ...state,
        horror: action.payload,
      };
    case actionTypes.HORROR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.COMEDY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.COMEDY:
      return {
        ...state,
        comedy: action.payload,
      };
    case actionTypes.COMEDY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.FAMILY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FAMILY:
      return {
        ...state,
        family: action.payload,
      };
    case actionTypes.FAMILY_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
