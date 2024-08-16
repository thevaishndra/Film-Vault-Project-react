import { useState } from "react";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular?api_key=efa80e823aef8f7f5ec5494be36854d6&language=en-US&page=2