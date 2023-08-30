import React, { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom';
const Detail = () => {
    const [currentMovie, setCurrentMovie] = useState([])
    const {id} = useParams()
    //const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://omdbapi.com/?i=${id}&apiKey=3cf21c98`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCurrentMovie(data);
                }
            })
    }, []);
    return (
        <div className='bg-gray-400 px-10'>
            <p className='text-2xl  text-black '>Name -: <span className='underline text-black'>{
                currentMovie?.Title
            } </span></p>
            <p className='text-xl text-blue-700 font-serif'>{currentMovie?.imdbRating}</p>
            <p className='text-xl font-serif text-gray-700'>{currentMovie?.Plot}</p>
            <p className='text-xl text-blue-700 font-serif'>Release Date - {currentMovie?.Released}</p>
            <p className='text-xl text-black font-serif'>{currentMovie?.Director}</p>
            <p className='text-xl text-black font-serif'>Duration - : {currentMovie?.Runtime}</p>
            
            <p className='text-xl text-red-600 font-serif'>Genre -:{currentMovie?.Genre}</p>
            <p className='text-xl text-blue-700 font-serif'>Actors -:  {currentMovie?.Actors}</p>

            <div className='flex justify-center items-center'>
            <img src=  {currentMovie?.Poster} alt="no image"  / >
            </div>
        </div>
    )
}

export default Detail