import React, { useEffect} from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'

function Movies() {
const [movies, setMovies] = useState([])

  useEffect( () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=efa80e823aef8f7f5ec5494be36854d6&language=en-US&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [])

  return (
    <div className= 'p-5'>
        <div className= 'text-2xl m-5 font-bold text-center'>
          Popular Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-4 m-3'>
        {movies.map((movieObj) =>  {
            return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
          })}
          
        </div>
        
        <Pagination/>
    </div>
  )
}

export default Movies