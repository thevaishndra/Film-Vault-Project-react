import React from 'react'

function Banner({ bannerImage, title }) {
  return (
    <div className= 'h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end w-full' style= {{backgroundImage: `url(${bannerImage})`}}>
        <div className='text-2xl text-white text-center w-full bg-gray-900/60 p-2' >{title}</div>
    </div>
  )
}

export default Banner