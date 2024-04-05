import React from 'react'
import { BrowserRouter, Link , Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <div>Pagina principal</div>

    <BrowserRouter>

      <Routes>
          <Route path='/' Component={}>

          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App