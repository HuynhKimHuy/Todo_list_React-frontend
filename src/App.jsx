import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'
import { Toaster } from 'sonner'
import TestUseEffect from './pages/TestUseReact'

function App() {


  return (

    <>
      <Toaster richColors></Toaster>  
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='*'
            element={<Notfound />}
          />
          <Route
            path='use-effect'
            element={<TestUseEffect />}
          />
        </Routes>
      </BrowserRouter></>
  )
}

export default App
