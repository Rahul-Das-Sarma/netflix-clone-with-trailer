import React from 'react';
import Mainpage from "./components/mainpage/mainpage";
import TVDetails from "./components/movieDetails/tvDetail";
import './App.css';
import {Route} from  'react-router-dom';
import movieDetails from './components/movieDetails/movieDetails';
import Nav from './components/mainpage/Nav/Nav'



function App() {
  return (
    <div className="App">
      <Nav/>
    <Route path="/" exact component={Mainpage} />
     <Route path="/movie/:id" exact component={movieDetails} />
     <Route path="/tv/:id" exact component={TVDetails} />

    </div>
  );
}

export default App;
