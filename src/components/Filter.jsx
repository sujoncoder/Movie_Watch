import React from 'react'

const Filter = () => {
    return (
        <div className='flex justify-center items-center space-x-2 my-4'>
            <button className='px-4 py-1.5 bg-slate-800 rounded text-white text-lg font-semibold active:bg-slate-900'>All</button>
            <button className='px-4 py-1.5 bg-blue-500 rounded text-white text-lg font-semibold active:bg-blue-600'>Watched</button>
            <button className='px-4 py-1.5 bg-green-500 rounded text-white text-lg font-semibold active:bg-green-600'>Unwatched</button>
        </div>
    )
}

export default Filter