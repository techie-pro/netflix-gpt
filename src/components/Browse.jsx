import Header from "./Header";
import useGetNowPlayingMovieList from "./hooks/useGetNowPlayingMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovieList();
  // const movielist = useSelector((state) => state.movies.nowPlayingMovies);

  // console.log(movielist);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
