import { PlayIcon } from "@heroicons/react/24/solid";
// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full max-w-full aspect-[16/9] absolute pt-[10%] px-24 min-h-screen bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white bg-opacity-50 hover:bg-gray-300  text-black font-bold px-6 py-3 text-lg rounded-lg cursor-pointer">
          <div className="flex hover:bg-opacity-50">
            <PlayIcon className="w-5 h-5 mr-2 mt-1" /> Play
          </div>
        </button>
        <button className="bg-gray-700  bg-opacity-50 hover:bg-gray-600 mx-2 cursor-pointer text-white font-bold px-4 py-3 text-lg rounded-lg">
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mt-[1.5%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <p className="ml-2">More info</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
