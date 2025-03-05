import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <div className='flex justify-center items-center space-x-2 my-4'>
            <button
                onClick={() => setFilter("all")}
                className='px-4 py-1.5 bg-slate-800 rounded text-white text-lg font-semibold active:bg-slate-900'>
                All
            </button>

            <button
                onClick={() => setFilter("watched")}
                className='px-4 py-1.5 bg-blue-500 rounded text-white text-lg font-semibold active:bg-blue-600'>
                Watched
            </button>

            <button
                onClick={() => setFilter("unwatched")}
                className='px-4 py-1.5 bg-slate-500 rounded text-white text-lg font-semibold active:bg-slate-600'>
                Unwatched
            </button>
        </div >
    );
};

export default Filter;