import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title , fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390px",
        width: "100%",
        playerVars:{
            autoplay: 1,
        }
    }

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            console.log(movie);
            movieTrailer(movie?.name || "")
            .then((url) =>{
                console.log(url, 'okokfosdakfoksado');
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }
    // console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row__posters">
            {movies.map(movie =>(
                <img
                    id={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                />
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row