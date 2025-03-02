import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex py-3 px-5">
          {showGptSearch && (
            <select
              className="bg-gray-600 m-2 px-2 py-4 text-white font-sans rounded-lg"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.language}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-blue-900 m-2 font-semibold py-3 px-3 rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <div className="flex-col">
            <img
              className="w-10 h-10 mt-2 ml-5"
              src={USER_ICON}
              alt="usericon"
            />
            <button
              onClick={handleSignOut}
              className="mt-1 font-bold text-white pr-6 rounded-lg cursor-pointer "
            >
              {user?.displayName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
