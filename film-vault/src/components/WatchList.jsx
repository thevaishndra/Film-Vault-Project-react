import React, { useState } from 'react'

function WatchList({watchlist}) {
  const [search, setSearch] = useState('')

  let handleSearch = ()=> {

  }







  return (
    <>
    <div className='flex justify-center flex-wrap m-3'>
      <div className='bg-blue-300 items-center flex justify-center h-[3rem] w-[8rem] rounded-xl text-white font-bold mx-4'>Comedy</div>
      <div className='bg-gray-300 items-center flex justify-center h-[3rem] w-[8rem] rounded-xl text-white font-bold'>Comedy</div>
    </div>

    <div className='flex justify-center my-4'>
        <input type="text" placeholder='Search movies' className='h-[3rem] w-[18rem] bg-gray-100 outline-none px-4 rounded-sm' />
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>
          {watchlist.filter((movieObj) => {
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj) => {
            return  <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
              <div className='mx-10'>{movieObj.title}</div>
            </td>

            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>Sport/Musical</td>

            <td className='text-red-800'>Delete</td>
          </tr>
          })}




         
          
        </tbody>

      </table>
    </div>
    </>
  )
}

export default WatchList