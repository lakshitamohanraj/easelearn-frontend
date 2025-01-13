import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './student/pages/LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello
    <LoginPage/>
    </>
  )
}

export default App
