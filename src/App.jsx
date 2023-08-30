import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigation } from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/header/Header'
import Detail from './pages/home/detail'
import Series from './pages/home/series'
function App() {
  const [searchInput, setSearchInput] = useState("Avengers");

  return (
    <div className='app'>
      <Router>
        <Header searchInput={searchInput}
            setSearchInput={setSearchInput}/>
        <Routes>
          <Route index element={<Home searchInput={searchInput}
            setSearchInput={setSearchInput} />}></Route>
          <Route path='movie/:id' element={<Detail />}></Route>
          <Route path='movies/series/:id' element={<Detail />}></Route>
          <Route path='movies/series' element={<Series />}></Route>
          <Route path="movies/:type" element={<h1 className='text-xl text-black font-extrabold'>Movie List page</h1>}></Route>
          <Route path="/*" element={<h1 className='text-xl text-black font-extrabold'> Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App 
