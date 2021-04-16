/*import React, { useState, useEffect } from "react";
import "./Row.css";
import ScrollContainer from "react-indiana-drag-scroll";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = '/api/films/all';
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const movieClicked = (moviename) => {
    console.log(moviename);
    if (trailerUrl !== "") setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="row__posters">*/
        {/* <div className="row__posters"> */}
        /*{movies.map((movie) => (
          <img
            onClick={() =>
              movieClicked(movie.name || movie.title || movie.orginal_name)
            }
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} //use && if theres no else or : otherwise use ?
            src={`requete sql ici`}
            alt={movie.name}
          />
        ))}*/
        {/* </div> */}
      /*</ScrollContainer>
      {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
*/