import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainNavBar from './exam/MainNavBar'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <MainNavBar/>
    </BrowserRouter>
  )
}

export default App
