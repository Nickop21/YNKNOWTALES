import { useEffect, useState } from "react";

import "./App.css";

import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import appwriteService from "./appwrite/config.js";
import { login, logout } from "./store/authSlice";
import { AllPost } from "./store/postSlice.js";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";
import Loader from "./componets/Loader.jsx";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([])
  const dispatch = useDispatch();
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];

  useEffect(() => {
    const updateStore = async () => {
      // to prevent unnecessary hit on login and signup page
      if (hideHeaderRoutes.includes(location.pathname)) {
        setLoading(false);
        return;
      }
      
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          const PostsData = await appwriteService.getPosts();
          if (PostsData) {
            setdata(PostsData);
            dispatch(AllPost(PostsData.documents));
          }
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
  
    updateStore();
  }, [location.pathname, dispatch]);

  return (
    <>
      {!loading ? (
        <>
          {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <main>
          <Outlet />
        </main>
          {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
