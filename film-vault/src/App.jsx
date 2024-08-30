import { useEffect, useState } from "react";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchlist, setwatchlist] =useState([])

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
                <Banner /> <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList watchlist={watchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular?api_key=efa80e823aef8f7f5ec5494be36854d6&language=en-US&page=2