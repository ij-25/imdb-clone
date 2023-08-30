import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = ({searchInput}) => {
  const [popularMovies, setPopularMovies] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://omdbapi.com/?s=${searchInput}&apiKey=3cf21c98`)
      .then(res => res.json())
      .then(data => {
        if (data && data.Search) {
          setPopularMovies(data.Search);
        }
      })
  }, [searchInput]);

  return (
    <div className='text-white h-full  font-extrabold poster bg-black '>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          popularMovies.map(movie => (
            <div className='flex flex-col   justify-center items-center' onClick={
              () => navigate(`/movie/${movie.imdbID}`)
            }>
              <span key={movie.Title} className='font-extrabold text-white text-2xl py-4'>{movie.Title}</span>
              <div className='posterImage w-96 '>
                <img src={movie.Poster} alt="movies" />

              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Home