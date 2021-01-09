import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreator/actionCreator";
import "./details.css";



function MovieDetails(props) {
  
  const urlId = props.match.params.id;
  const onMovieDetails = props.onMovieDetails;
  const onMovieTrailer = props.onMovieTrailer;
  useEffect(() => {
    onMovieDetails(urlId);
    onMovieTrailer(urlId);
    window.scrollTo(0, 0);
  }, [onMovieTrailer, onMovieDetails, urlId]);

  let drawModal = document.getElementById('ytplayer');

const handleClick = () => {
// setShowModal(prevState => {
//   return !prevState.showModal
// })
if (drawModal.className === 'youtube__trailer'){
  drawModal.className += ' youtube__trailer__active'
 
}else {
  drawModal.className = 'youtube__trailer'
  
}

}


  return (
    <>
      {props.showMovieInfo.loading === true ? (
        <h1>Loading....</h1>
      ) : (<>
                <iframe
                className= 'youtube__trailer'
                title="youtube"
                id="ytplayer"
                type="text/html"
                src={`https://www.youtube.com/embed/${ props.showMovieTrailer.movieInfo?.results[0].key }`}
                frameborder="0"
                marginheight="0"
                marginwidth="0"                
              />
        <div className="details-container-wrapper">
          <div className="details-container-margin">
            <div className="details-container">
    
              <h1 className="container__heading">
                {props.showMovieInfo.movieInfo?.original_title}
              </h1>

              <p className="container__para">
                {props.showMovieInfo.movieInfo?.overview}
              </p>

              <button onClick={handleClick} className="btn Trailer__button">Watch Trailer</button>
              <button className="btn watch__later">Save Movie</button>
            </div>
            <div className="header__design">
              <img
                className="new_banner"
                src={`https://image.tmdb.org/t/p/original/${props.showMovieInfo.movieInfo?.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    showMovieInfo: state.movieDetails,
    showMovieTrailer: state.movieTrailer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onMovieDetails: (urlId) => {
      dispatch(actionCreators.MovieDetailsPage(urlId));
    },
    onMovieTrailer: (urlId) => {
      dispatch(actionCreators.MovieTrailerAction(urlId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
