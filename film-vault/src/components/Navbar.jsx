import React from 'react'
import Logo from '../VideoCam.png'
import { Link } from 'react-router-dom'
  function Navbar() {
    return (
        <div className = 'flex border space-x-8 items-center pl-3 py-3 text-white  bg-blue-900'>
        <img className = 'w-[40px] bg-white rounded-md p-1' src={Logo}/>

        <Link className = 'text-xl font-bold' to='/'>Movies</Link>

        <Link  className = 'text-xl font-bold' to='/watchlist'>Watchlist</Link>
    </div>
    )
  }
  
  export default Navbar
  