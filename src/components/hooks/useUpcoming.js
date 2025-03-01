import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpComing } from "../../utils/movieSlice";

const useUpComing = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upComing = useSelector((store) => store.movies.upComing);

  const getUpComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("upcoming movies: ", json.results);
    dispatch(addUpComing(json.results));
  };

  useEffect(() => {
    !upComing && getUpComing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpComing;
