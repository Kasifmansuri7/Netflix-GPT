import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef("Test@1234");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the data
    const fullNameValue = fullName?.current?.value;
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;

    const validationResult = validateData(emailValue, passwordValue);
    setErrorMessage(validationResult);

    if (validationResult) return;

    if (!isSignInForm) {
      // sign up
      // create user account
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log("userCredential: ", userCredential);
          const user = userCredential.user;
          console.log("user: ", user);
        })
        .catch((error) => {
          console.log("Sign up error: ", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user: ", user);
        })
        .catch((error) => {
          console.log("Sign in error: ", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Invalid credentials!`);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm((isSignInForm) => !isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex relative flex-col w-3/12 top-32 left-[40%] px-10 py-20 border rounded-md border-black bg-[rgba(0,0,0,0.7)]"
      >
        <h1 className="text-3xl font-bold text-white pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-3 border mb-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="p-3 border mb-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            ref={password}
            placeholder="Password"
            className="p-3 w-full border bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 position absolute right-3 top-3 text-white"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 position absolute right-3 top-3 text-white"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
        <p className="text-red-500 text-sm pt-1">{errorMessage}</p>
        <button className="p-2 border mt-4 border-black bg-red-600 font-bold">
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
