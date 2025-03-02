import { useSelector } from "react-redux";
import lang from "../utils/languages";

const GptSearchBar = () => {
  const langkey = useSelector((state) => state.config.lang);
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4 col-span-9 bg-white rounded-lg"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-4 bg-red-700 text-white rounded-lg ">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
