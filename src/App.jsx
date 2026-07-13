import ViewFlights from "./components/ViewFlight"
import { useState } from 'react'
import AddFlight from './components/AddFlight'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewFlights/>}/>
      <Route path="/add" element={<AddFlight/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
