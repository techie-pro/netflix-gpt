import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useGetNowPlayingMovieList = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    getNowPlayingMovieList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetNowPlayingMovieList;
