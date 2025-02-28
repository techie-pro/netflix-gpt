import { useState, useRef } from "react";
import Header from "./Header";
import { validateFormFields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const fullname = useRef("");

  const handleSubmit = () => {
    const mail = email.current.value;
    const secret = password.current.value;
    const name = fullname.current.value;
    const message = validateFormFields(mail, secret);
    setErrorMessage(message);
    console.log(mail, secret);
    if (message) return;
    console.log(isSignedIn);
    if (!isSignedIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              console.log(error.message);
              navigate("/error");
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, mail, secret)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center">
      <Header />
      <div className="absolute w-full h-full">
        <img className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={fullname}
            className="p-4 my-2 w-full border"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-4 my-2 w-full border"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full border"
        />
        <button
          className="p-4 my-2 bg-red-700 border-rounded w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold font-lg">{errorMessage}</p>
        <p className="my-4 cursor-pointer underline" onClick={toggleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
