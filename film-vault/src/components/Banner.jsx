import React from 'react'

function Banner() {
  return (
    <div className= 'h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end w-full' style= {{background: `url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/how-to-lose-a-guy-in-10-days.jpg)`}}>
        <div className='text-2xl text-white text-center w-full bg-gray-900/60 p-2' >How To Lose A Guy In 10 Days</div>
    </div>
  )
}

export default Banner