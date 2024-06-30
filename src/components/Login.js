import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  console.log("isSignInForm: ", isSignInForm);

  const toggleSignInForm = () => {
    setIsSignInForm((isSignInForm) => !isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="flex relative flex-col w-3/12 top-32 left-[40%] px-10 py-20 border rounded-md border-black bg-[rgba(0,0,0,0.7)]">
        <h1 className="text-3xl font-bold text-white pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border mb-4 bg-transparent text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-3 border mb-4 bg-transparent text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border  mb-6 bg-transparent text-white"
        />
        <button className="p-2 border border-black bg-red-600 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white py-4 text-right">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span className="underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
