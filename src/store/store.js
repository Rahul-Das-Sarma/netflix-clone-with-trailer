import {createStore,combineReducers, applyMiddleware,compose} from  'redux'
import movieReducer from './reducers/homeReducer';
import movieDetailsReducer from './reducers/moviedetailsReducer';
import movieTrailerReducer from './reducers/movieTraileReducer';
import thunk from 'redux-thunk'
import tvReducer from './reducers/tvdetailsreducer';

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action)
            console.log('[Middleware]', store.getState())
            return result
           
        }
    }
  }


const rootReducer = combineReducers({
movie: movieReducer,
movieDetails: movieDetailsReducer,
tvDetails: tvReducer,
movieTrailer: movieTrailerReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger, thunk)))


export default store;