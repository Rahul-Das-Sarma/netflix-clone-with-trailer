import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers, applyMiddleware,compose} from  'redux'
import movieReducer from './store/reducers/homeReducer';
import movieDetailsReducer from './store/reducers/moviedetailsReducer';
import movieTrailerReducer from './store/reducers/movieTraileReducer';
import thunk from 'redux-thunk'
import tvReducer from './store/reducers/tvdetailsreducer';
import tvTrailerReducer from './store/reducers/tvTrailerReducer';
import UserReducer from "./store/reducers/userReducer";
import firebase from "firebase/app";
import { 
  ReactReduxFirebaseProvider,   
    firebaseReducer
  } from 'react-redux-firebase';

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

  const rrfConfig = {
    userProfile: 'users'
    
  }


const rootReducer = combineReducers({
movie: movieReducer,
movieDetails: movieDetailsReducer,
tvDetails: tvReducer,
movieTrailer: movieTrailerReducer,
tvTrailers: tvTrailerReducer,
user: UserReducer,
firebase : firebaseReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger, thunk)))

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
              <App />
     </ReactReduxFirebaseProvider>
     </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
