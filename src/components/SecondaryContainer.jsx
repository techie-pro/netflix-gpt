import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-full max-w-full">
        <div className="-mt-56 pl-12 relative z-20 w-full max-w-full">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"UpComing"} movies={movies.upComing} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
