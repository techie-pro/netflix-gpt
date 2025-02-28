/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const srcUrl =
    "https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?&autoplay=1&mute=1";
  //   console.log("source url : ", srcUrl);
  return (
    <div className="w-full max-w-full h-auto">
      <iframe
        className="w-full max-w-full h-auto aspect-video"
        src={srcUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
