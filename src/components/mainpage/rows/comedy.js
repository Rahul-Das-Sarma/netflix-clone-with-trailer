import React, { useEffect,  useRef } from "react";
import {Link } from 'react-router-dom';
import "./rows.css";
import * as actionCreator from "../../../store/actionCreator/actionCreator";
import { connect } from "react-redux";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  onFetchingComedy,
  showfetchedComedy,
}) {
 

  const Scroller = useRef(null);

  let leftarrowClass = "left__arrow";
  if (isLargeRow) leftarrowClass = "left__arrow__large";

  let leftArrowElementClass = "left__element";
  if (isLargeRow) leftArrowElementClass = "left__element__large";

  let rightarrowClass = "right__arrow";
  if (isLargeRow) rightarrowClass = "right__arrow__large";

  let rightArrowElementClass = "right__element";
  if (isLargeRow) rightArrowElementClass = "right__element__large";

  useEffect(() => {
    onFetchingComedy(fetchUrl);
    
  }, [onFetchingComedy, fetchUrl]);



  const onPress = (scrollByMeasure) => {
    return Scroller ? (Scroller.current.scrollLeft += scrollByMeasure) : null;
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" ref={Scroller}>
        <div className={leftarrowClass} onClick={() => onPress(-600)}>
          <span className={leftArrowElementClass}>{"<"}</span>
        </div>
        {showfetchedComedy.loading === true ? (
          <h1>loading</h1>
        ) : (
            showfetchedComedy.comedy.map((movie) => {
            return (
              <Link to={`/movie/${movie.id}`}>
              <img
                key={movie.id}
                className={`movie_image ${isLargeRow && "movie_imageLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              </Link>
            );
          })
        )}
        <div className={rightarrowClass} onClick={() => onPress(+600)}>
          <span className={rightArrowElementClass}>{">"}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showfetchedComedy: state.movie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchingComedy: (fetchUrl) => {
      dispatch(actionCreator.FetchDataComedy(fetchUrl));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
