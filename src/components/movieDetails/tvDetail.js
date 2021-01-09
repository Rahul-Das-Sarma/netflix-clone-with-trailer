import React, {useEffect} from 'react';
import * as actionCreators from '../../store/actionCreator/actionCreator';
import {connect} from  'react-redux';
 
function TVDetails(props) {
    const urlId = props.match.params.id;
    const onTvDetails = props.onTvDetails
    useEffect(() => {
      onTvDetails(urlId);
      window.scrollTo(0, 0)
    }, [onTvDetails, urlId]);
  
    return (
      <>
        {props.showMovieInfo.loading === true ? (
          <h1>Loading....</h1>
        ) : (
          <div className="details-container-wrapper">
            <div className = "details-container-margin">
            <div className="details-container"> 
            <h1 className="container__heading">{props.showMovieInfo.movieInfo?.name}</h1>
  
            <p className="container__para">{props.showMovieInfo.movieInfo?.overview}</p>
           
           <button className="btn Trailer__button">Watch Trailer</button>
           <button className="btn watch__later">Save Movie</button>
            </div>
            <div className="header__design">            
                <img  className="new_banner" src={`https://image.tmdb.org/t/p/original/${props.showMovieInfo.movieInfo?.poster_path}`} alt='' />
              </div>
              </div>
          </div>
        )}
      </>
    );
  }
  const mapStateToProps = (state) => {
    return {
      showMovieInfo: state.tvDetails,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onTvDetails: (urlId) => {
        dispatch(actionCreators.TvShowDetails(urlId));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TVDetails);
