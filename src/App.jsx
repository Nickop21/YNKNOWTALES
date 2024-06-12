import { useEffect, useState } from 'react'

import './App.css'

import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import Login from "./pages/Login.jsx";
function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  return (
    <>

     <main>
    {/* <Login/> */}
      {!loading &&<Outlet/>
      }
 
        </main>
     
    </>
  )
}

export default App
