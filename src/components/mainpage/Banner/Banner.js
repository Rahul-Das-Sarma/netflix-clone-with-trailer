import React, { useEffect, useState } from "react";
import axios from "../../../axios"
import requests from "../../../requests"
import "./Banner.css"
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {userSignOut} from  "../../../store/actionCreator/actionCreator"


function Banner(props){
    const [movie, setmovie] = useState([])
    const history = useHistory();
    useEffect(()=>{
        async function fetchData() {
const request = await axios.get(requests.fetchNetflixOriginals)

setmovie(request.data.results[
    Math.floor(Math.random() * request.data.results.length - 1)
])
return request;
        }
fetchData();
    },[]);

    const handleClick = () => {
        props.Logout() 
        history.push("/login")

  }
    function truncateString(str, n) {        
          return str?.length > n?  str.slice(0, n-1) + "..." : str       
    }

console.log(movie)
    return(
        <header className="banner" 
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            
        }}>
            <div className="banner-content">
    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
      <button className="banner__button play">Play </button>
      <button className="banner__button">My List</button>
      <button onClick={handleClick} className="banner__button">Logout</button>
    <p className="banner__para">{truncateString(movie?.overview,150)}</p>
   
            </div>
            <div className="banner__footbottom"/>
        </header>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        Logout : () => dispatch(userSignOut())
    }
}

export default connect(null, mapDispatchToProps)(Banner);