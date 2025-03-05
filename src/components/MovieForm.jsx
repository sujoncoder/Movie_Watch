import React from 'react'
import { useState } from 'react'

const MovieForm = ({ addMovie }) => {
    const [movieData, setMovieData] = useState({
        title: "",
        ott: ""
    });

    // HANDLE ONCHANGE
    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setMovieData({ ...movieData, [key]: value })
    };

    // HANDLE SUBMIT
    function handleSubmit(e) {
        e.preventDefault();
        console.log(movieData)
        if (!movieData?.title.trim() || !movieData?.title.trim()) return;
        addMovie(movieData)
        setMovieData({ ...movieData, title: "", ott: "" });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-2 md-8 w-full'>
            <input
                type="text"
                onChange={handleChange}
                placeholder='Enter movie name'
                name="title"
                value={movieData.title}
                className='w-full border px-2 py-1.5 rounded'
            />

            <select
                name="ott"
                onChange={handleChange}
                value={movieData?.ott}
                id=""
                className='border border-gray rounded-md'
            >
                <option value="">Select an OTT</option>
                <option value="Netflix">Netflix</option>
                <option value="Hotstart">Hotstar</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Sony Live">Sony Live</option>
                <option value="Hoichoi">Hoichoi</option>
                <option value="Others">Others</option>
            </select>

            <button
                type='submit'
                className='text-white bg-blue-400 active:bg-blue-500 px-4 py-2 rounded'
            >
                Add
            </button>
        </form>
    )
}

export default MovieForm