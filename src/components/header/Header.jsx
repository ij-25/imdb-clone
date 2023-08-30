
import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <div className='header bg-black p-6 '>
      <div className='headerleft flex space-x-10 font-extrabold px-7'>
        <Link to="/"><img className="header__icon flex  h-11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
        <Link to="/movies/series" className='text-white hover:text-red-500 '><span>Series</span></Link>
        <Link to="/movies/top_rated" className='text-white hover:text-red-500 '><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" className='text-white hover:text-red-500 '><span>Upcoming</span></Link>
        <div>
          <input type="text" placeholder='You can search here' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Header