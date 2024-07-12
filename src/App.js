import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./utils/firebase";
import appStore from "./utils/store/appStore";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      console.log(user)
    })
  }, []);

  
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
