import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebase";
const auth = getAuth();

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationError, setValidationError] = useState(false);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the data
    const fullNameValue = fullName?.current?.value;
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;

    const validationResult = validateData(emailValue, passwordValue);
    setValidationError(validationResult);

    if (validationResult) return;

    // create user account
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        console.log("userCredential: ", userCredential);
        // Signed up
        const user = userCredential.user;
        console.log("user: ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("errorCode: ", errorCode);
        console.error("errorMessage: ", errorMessage);

        alert("Something went wrong, sign Up Failed!!");
      });
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
        <p className="text-red-500 text-sm">{validationError?.email}</p>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 border bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
        />
        <p className="text-red-500 text-sm">{validationError?.password}</p>
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
