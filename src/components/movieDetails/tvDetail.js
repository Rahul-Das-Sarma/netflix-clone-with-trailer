import React, {useEffect} from 'react';
import * as actionCreators from '../../store/actionCreator/actionCreator';
import {connect} from  'react-redux';
 
function TVDetails(props) {
    const urlId = props.match.params.id;
    const onTvDetails = props.onTvDetails
    const ontvTrailerAction = props.tvTrailerAction;
    useEffect(() => {
      onTvDetails(urlId);
      ontvTrailerAction(urlId)
      window.scrollTo(0, 0)
    }, [onTvDetails, urlId,ontvTrailerAction]);

   
  
    const handleClick = () => {
      let drawModal = document.getElementById('ytplayer');
      
    if (drawModal.className === 'youtube__trailer'){
      drawModal.className += ' youtube__trailer__active'
     
    }else {
      drawModal.className = 'youtube__trailer'
      
    }
    
    }

    let workingUrl;

if(props.showTvTrailers.tvTrailerInfo?.results.length === 0) {
   workingUrl = null
}else {
  workingUrl = props.showTvTrailers.tvTrailerInfo?.results[0].key
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
          src={`https://www.youtube.com/embed/${ workingUrl}`}
          frameborder="0"
          marginheight="0"
          marginwidth="0"                
        />
          <div className="details-container-wrapper">
            <div className = "details-container-margin">
            <div className="details-container"> 
            <h1 className="container__heading">{props.showMovieInfo.movieInfo?.name}</h1>
  
            <p className="container__para">{props.showMovieInfo.movieInfo?.overview}</p>
           
           <button className="btn Trailer__button" onClick={handleClick}>Watch Trailer</button>
           <button className="btn watch__later">Save Movie</button>
            </div>
            <div className="header__design">            
                <img  className="new_banner" src={`https://image.tmdb.org/t/p/original/${props.showMovieInfo.movieInfo?.poster_path}`} alt='' />
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
      showMovieInfo: state.tvDetails,
      showTvTrailers: state.tvTrailers
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onTvDetails: (urlId) => {
        dispatch(actionCreators.TvShowDetails(urlId));
      },
      tvTrailerAction: (urlId) => {
        dispatch(actionCreators.TvShowTrailers(urlId))
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TVDetails);
