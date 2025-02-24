import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full border"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full border"
        />
        <button className="p-4 my-2 bg-red-700 border-rounded w-full rounded-lg">
          Sign In
        </button>

        <p className="my-4 cursor-pointer underline" onClick={toggleSignIn}>
          {isSignedIn
            ? "Already a member Sign In"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
