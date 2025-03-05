import ReactStars from "react-stars"

const MovieItem = ({ movie, rateMovie, toggleWatched, deleteMovie }) => {


    // HANDLE RATING CHANGE
    function ratingChange(newRating) {
        rateMovie(movie.id, newRating)
    };

    return (
        <li className="flex justify-between items-center space-y-4">
            <div className="flex items-center">
                <span className={`text-xl font-semibold ${movie.watched ? "line-through text-gray-400" : "text-white"}`}>
                    {movie.title}
                </span>

                <span className="bg-cyan-200 px-2 py-0.5 rounded-full ml-2">on {movie?.ott}</span>

                {movie?.rating && <span className="ml-2 text-yellow-500">⭐ {movie.rating}/5</span>}
            </div>

            <div className="flex items-center gap-3">
                <ReactStars
                    count={5}
                    value={movie?.rating}
                    onChange={ratingChange}
                    size={24}
                    color2={'#ffd700'}
                />

                <button
                    onClick={() => toggleWatched(movie.id)}
                    className={`px-2 py-1 text-white rounded ${movie.watched ? "bg-blue-500" : "bg-slate-500"}`}>
                    {!movie.watched ? "Unwatched" : "Watched"}
                </button>

                <button
                    onClick={() => deleteMovie(movie.id)}
                    className="px-2 py-1 bg-red-500 active:bg-red-600 text-white rounded">
                    Delete
                </button>
            </div>
        </li>
    )
}

export default MovieItem;