import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style= {{backgroundImage : 
    `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      <div  className='text-white text-center p-2 text-xl w-full bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard