/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 mb-3">
      <h1 className="text-3xl font-bold py-3 pl-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-custom scroll-smooth overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
