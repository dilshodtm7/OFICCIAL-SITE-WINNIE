import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home.jsx'
import Header from './header/header.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
