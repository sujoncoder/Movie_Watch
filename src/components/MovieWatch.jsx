// MovieWatch.js
import { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Filter from "./Filter";

const MovieWatch = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("all");

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
    }

    // MOVIE RATING FUNCTION
    function rateMovie(id, rating) {
        setMovies(prevMovies =>
            prevMovies.map((movie) => movie.id === id ? { ...movie, rating } : movie)
        );
    }

    // TOGGLE MOVIE WATCHED FUNCTION
    function toggleWatched(id) {
        setMovies(prevMovies =>
            prevMovies.map((movie) => movie.id === id ? { ...movie, watched: !movie.watched } : movie)
        );
    }

    // DELETE MOVIE FUNCTION
    function deleteMovie(id) {
        setMovies(prevMovies => prevMovies.filter((movie) => movie.id !== id));
    }

    // FILTER MOVIES BASED ON SELECTION
    const filteredMovies = movies.filter(movie => {
        if (filter === "watched") return movie.watched;
        if (filter === "unwatched") return !movie.watched;
        return true;
    });

    return (
        <div className="w-1/2 border rounded-lg p-4 mx-auto bg-slate-900 shadow my-10">
            <Heading />
            <div className="mt-10">
                {/* MOVIES FORM COMPONENT  */}
                <MovieForm addMovie={addMovie} />


                {/* FILTER COMPONENT  */}
                <Filter setFilter={setFilter} />


                {/* MOVIES LIST COMPONENT  */}
                <MovieList
                    movies={filteredMovies}
                    rateMovie={rateMovie}
                    toggleWatched={toggleWatched}
                    deleteMovie={deleteMovie}
                />
            </div>
        </div>
    );
};

export default MovieWatch;