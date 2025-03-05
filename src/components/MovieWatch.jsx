import { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Filter from "./Filter";

const MovieWatch = () => {
    const [movies, setMovies] = useState([]);

    // ADD MOVIE
    function addMovie({ title, ott }) {
        const newMovie = {
            id: crypto.randomUUID(),
            title,
            ott,
            rating: null,
            watched: false
        };

        setMovies([...movies, newMovie]);
    };


    // MOVIE RATING FUNCTION
    function rateMovie(id, rating) {
        setMovies(
            movies.map((movie) => movie.id === id ? { ...movie, rating } : movie)
        )
    };

    // TOGGLe MOVIE WATCHED FUNCTION
    function toggleWatched(id) {
        setMovies(
            movies.map((movie) => movie.id === id ? { ...movie, watched: !movie.watched } : movie)
        );
    };

    // DELETE MOVIE FUNCTION
    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id))
    };

    return (
        <div className="w-1/2 border rounded-lg p-4 mt-10 mx-auto bg-slate-900 shadow">
            <Heading />

            <div className="mt-10">
                <MovieForm addMovie={addMovie} />

                <Filter />

                <MovieList
                    movies={movies}
                    rateMovie={rateMovie}
                    toggleWatched={toggleWatched}
                    deleteMovie={deleteMovie}
                />
            </div>
        </div>
    )
}

export default MovieWatch;