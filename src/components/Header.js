import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
      })
      .catch((err) => {
        console.log('Error while signing out... ', err);
        navigate('/error');
      });
  };

  return (
    <header className="absolute z-10 px-4 py-2 w-full bg-gradient-to-b from-black flex justify-between items-center">
      <div className="w-44">
        <img src={NETFLIX_LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex gap-2 items-center h-8">
          <img
            src={user.photoURL ? user.photoURL : USER_AVATAR}
            className="h-12 w-12 border border-black"
          />
          {user.displayName && (
            <p className="text-white">Hello, {user.displayName}👋🏻</p>
          )}

          <button
            className="border p-2 rounded-md text-white text-sm bg-[#E50914]"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
