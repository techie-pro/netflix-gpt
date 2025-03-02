import { IMG_CDN_URL } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-2 border-red-600 border flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform transition duration-200 hover:scale-105">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
