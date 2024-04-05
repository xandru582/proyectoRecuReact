import React from 'react'
import { BrowserRouter, Link , Routes, Route } from "react-router-dom";
import Principal from './pages/Principal';
import Cabecera from './components/Cabecera';
const App = () => {
  return (
    <>
    
    <Cabecera></Cabecera>
    <BrowserRouter>

      <Routes>
          <Route path='/' Component={Principal}>

          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App