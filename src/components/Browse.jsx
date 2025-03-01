import Header from "./Header";
import useGetNowPlayingMovieList from "./hooks/useGetNowPlayingMovieList";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRated from "./hooks/useTopRated";
import useUpComing from "./hooks/useUpcoming";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovieList();
  usePopularMovies();
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
