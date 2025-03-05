import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, rateMovie, toggleWatched, deleteMovie }) => {
    return (
        <div>
            {movies.length === 0 ? (
                <p className='text-center text-2xl text-gray-300 my-7'>
                    No movies in your watchlist. Add more?
                </p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            rateMovie={rateMovie}
                            toggleWatched={toggleWatched}
                            deleteMovie={deleteMovie}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;