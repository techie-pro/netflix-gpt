// import { NETFLIX_BG } from "../utils/constants";
import { NETFLIX_BG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchPage from "./GptSearchPage";

const GPTSearch = () => {
  return (
    <div>
      <div className=" min-h-screen">
        <div className="absolute w-full h-full -z-10">
          <img
            className="w-full h-full object-cover"
            src={NETFLIX_BG}
            alt="netflix-bg"
          />
        </div>
        <GptSearchBar />
        <GptSearchPage />
      </div>
    </div>
  );
};

export default GPTSearch;
