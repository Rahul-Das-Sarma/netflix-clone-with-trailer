import React from 'react';
import Mainpage from "./components/mainpage/mainpage";
import TVDetails from "./components/movieDetails/tvDetail";
import './App.css';
import {Route} from  'react-router-dom';
import movieDetails from './components/movieDetails/movieDetails';
import Nav from './components/mainpage/Nav/Nav';
import Signup from './components/signup/signup';
import Login from './components/Login/login';
import PrivateRoute from './privateRoute';


function App() {
  return (
    <div className="App">
      <Nav/>
    <PrivateRoute path="/" exact component={Mainpage} />
     <PrivateRoute path="/movie/:id" exact component={movieDetails} />
     <PrivateRoute path="/tv/:id" exact component={TVDetails} />
     <Route path="/signup" exact component={Signup} /> 
     <Route path="/login" exact component={Login} />
    </div>
  );
}

export default App;
