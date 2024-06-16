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
  const dispatch = useDispatch();
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];

  useEffect(() => {
    if (hideHeaderRoutes.includes(location.pathname)) {
      setLoading(false);
      return;
    }
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          appwriteService.getPosts().then((PostsData) => {
            if (PostsData) {
              dispatch(AllPost(PostsData.documents));
            }
          });
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

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
