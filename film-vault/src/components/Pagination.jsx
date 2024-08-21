import React from 'react'

function Pagination() {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div className='px-8 hover:cursor-pointer'>Previous</div>
        <div className='hover:cursor-pointer font-bold'>1</div>
        <div className='px-8 hover:cursor-pointer'>Next</div>
    </div>
  )
}

export default Pagination