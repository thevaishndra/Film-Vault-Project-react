import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-blue-900 p-3 mt-8 flex justify-center text-white'>
        <div onClick={handlePrev} className='px-8 hover:cursor-pointer'>Previous</div>
        <div className='hover:cursor-pointer font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-8 hover:cursor-pointer'>Next</div>
    </div>
  )
}

export default Pagination