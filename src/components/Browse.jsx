import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import useGetNowPlayingMovieList from "./hooks/useGetNowPlayingMovieList";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRated from "./hooks/useTopRated";
import useUpComing from "./hooks/useUpcoming";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const isGptSearchEnabled = useSelector((state) => state.gpt.showGptSearch);
  useGetNowPlayingMovieList();
  usePopularMovies();
  useTopRated();
  useUpComing();

  return (
    <div>
      <Header />
      {isGptSearchEnabled ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
