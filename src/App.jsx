import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects } from './pages';

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* TODO: lose these as they are not to be used */}
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App