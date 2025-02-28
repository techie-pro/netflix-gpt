import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        navigate("/error");
      });
  };

  return (
    <div className="absolute py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      {user && (
        <div className="flex py-3 px-5">
          <div className="flex-col">
            <img
              className="w-10 h-10 mt-2 ml-5"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="usericon"
            />
            <p className="mt-1 font-bold ">{user?.displayName}</p>
          </div>
          <button
            className="font-bold p-3 text-white rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
