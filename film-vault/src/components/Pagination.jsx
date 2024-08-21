import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'>Previous</div>
        <div className='hover:cursor-pointer font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-8 hover:cursor-pointer'>Next</div>
    </div>
  )
}

export default Pagination