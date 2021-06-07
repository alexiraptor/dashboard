import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Tmdb() {
    const baseImgUrl = "https://image.tmdb.org/t/p/w154/";
    const [movies, setMovieDetails] = useState([]);
    const [movietitle, setMovieTitle] = useState("");
    const movieres = movies.map((movie) => (
        <div className="movie-box">
            <div className="movie-pic">
                <img className="moviepic" src={`${baseImgUrl}${movie.poster_path}`} alt=""></img>
            </div>
            <div className="movie-detail">
                <div className="movie-title">
                    <div>{movie.title}</div>
                </div>
                <div className="movie-release">
                    <div>{movie.release_date}</div>
                    <div>rating: {movie.vote_average * 10}%</div>
                </div>
                <div className="movie-description">
                    <div>{movie.overview}</div>
                </div>
            </div>
        </div>
    ));
    console.log(movies);

    function getMovie() {
        axios
            .get("http://localhost:8000/api/tmdb/", {
                params: { movietitle: movietitle },
            })
            .then((response) => {
                setMovieDetails(response.data.results);
                setMovieTitle(movietitle);
            });
    }
    return (
        <div className="movie-input-box">
            <input
                type="text"
                value={movietitle}
                name="title"
                onChange={(e) => setMovieTitle(e.target.value)}
                className="Search-bar"
                placeholder="Enter a movie title"
            />

            <Button onClick={getMovie}>search</Button>
            <div className="movie-detail-box">
                <div> {movieres} </div>
            </div>
        </div>
    );
}

export default Tmdb;
