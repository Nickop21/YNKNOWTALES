import { useState } from 'react'

import './App.css'
import { Alert, Button } from "@material-tailwind/react";
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
