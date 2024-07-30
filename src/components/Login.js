import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClosedEye, GoogleIcon, OpenEye } from '../Assets/SVG';
import { MOVIE_BACKGROUND } from '../utils/constants';
import { auth, provider } from '../utils/firebase.config';
import { addUser } from '../utils/store/userSlice';
import { validateData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const fullNameRef = useRef(null);
  const emailRef = useRef('kasif.mansuri.7@gmail.com');
  const passwordRef = useRef('Test@1234');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the data
    const fullNameValue = fullNameRef?.current?.value;
    const emailValue = emailRef?.current?.value;
    const passwordValue = passwordRef?.current?.value;

    const validationResult = validateData(emailValue, passwordValue);
    setErrorMessage(validationResult);

    if (validationResult) return;

    if (!isSignInForm) {
      // sign up
      // create user account
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullNameValue,
          }).then(() => {
            console.log('Display name added!');
            console.log('auth: ', auth);
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid, displayName, email }));
          });
        })
        .catch((error) => {
          console.log('Sign up error: ', error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user: ', user);
        })
        .catch((error) => {
          console.log('Sign in error: ', error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Invalid credentials!`);
        });
    }
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('result: ', result);
        const { uid, displayName, email, photoURL } = result.user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        console.log('Sign in with google failed...', error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  };
  const toggleSignInForm = () => {
    setIsSignInForm((isSignInForm) => !isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <img src={MOVIE_BACKGROUND} alt="background" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex relative flex-col w-3/12 top-32 left-[40%] px-10 py-20 border rounded-md border-black bg-[rgba(0,0,0,0.7)]">
        <h1 className="text-3xl font-bold text-white pb-8">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullNameRef}
            placeholder="Full Name"
            className="p-3 border mb-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
        )}
        <input
          type="email"
          ref={emailRef}
          defaultValue={emailRef.current}
          placeholder="Email"
          className="p-3 border mb-4 bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            ref={passwordRef}
            defaultValue={passwordRef.current}
            placeholder="Password"
            className="p-3 w-full border bg-transparent text-white focus:outline-none focus:ring-2 focus:border-white focus:ring-white focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <OpenEye /> : <ClosedEye />}
          </span>
        </div>
        <p className="text-red-500 text-sm pt-1">{errorMessage}</p>
        <button className="p-2 border mt-4 border-black bg-red-600 font-bold">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <button
          type="button"
          className="p-2 border mt-4 bg-white font-bold flex justify-center"
          onClick={handleGoogleAuth}>
          <GoogleIcon />
        </button>

        <p className="text-white py-4 text-right">
          {isSignInForm ? 'New to Netflix? ' : 'Already a user? '}
          <span className="underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign Up now' : 'Sign In now'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
