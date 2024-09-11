import { useEffect, useState } from "react";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import axios from 'axios';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
function App() {
  let [watchlist, setwatchlist] =useState([])

  const [bannerImage, setBannerImage] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');

  useEffect(() => {
    // Fetch popular movie to use as banner
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=efa80e823aef8f7f5ec5494be36854d6&language=en-US&page=1')
      .then(res => {
        const popularMovies = res.data.results;
        if (popularMovies.length > 0) {
          setBannerImage(`https://image.tmdb.org/t/p/original${popularMovies[0].backdrop_path}`);
          setBannerTitle(popularMovies[0].original_title);
        }
      });
  }, []);


  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setwatchlist (newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp' , JSON.stringify(filteredWatchList))
    setwatchlist(filteredWatchList)
    console.log(filteredWatchList)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(moviesFromLocalStorage) {
      setwatchlist(JSON.parse(moviesFromLocalStorage))
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner bannerImage={bannerImage} title={bannerTitle} /> <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setwatchlist={setwatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


