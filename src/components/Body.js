import Header from './Header';
import Browse from './Browse';
import { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import { useNavigate } from 'react-router-dom';

const AuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // whenever this component loads the effect code executed, and returned unsubscribe function kept it somewhere, when this component unmounts the returns unsubscribe function executed first.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
      return () => unsubscribe();
    });
  }, [dispatch]);
};

const Body = () => {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <AuthListener />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/browse',
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default Body;
