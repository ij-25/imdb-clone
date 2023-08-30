import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Series = () => {
    const [popularMovies, setPopularMovies] = useState([])
     const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://omdbapi.com/?s=friends&type=series&apiKey=3cf21c98`)
            .then(res => res.json())
            .then(data => {
                if (data && data.Search) {
                    setPopularMovies(data.Search);
                }
            })
    }, []);
    return (
        <div className='flex flex-row flex-wrap gap-3'>
            {popularMovies.map((movie) => (
                <div className='flex flex-col   justify-center items-center' onClick={
                    () => navigate(`/movies/series/${movie.imdbID}`)
                }>
                    <span key={movie.Title} className='font-extrabold text-white text-2xl py-4'>{movie.Title}</span>
                    <div className='posterImage w-96 '>
                        <img src={movie.Poster} alt="movies" />

                    </div>

                </div>
            )
            )}
        </div>
    )
}

export default Series