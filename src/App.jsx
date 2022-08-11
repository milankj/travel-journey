import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import AddNew from './components/AddNew'
function App() {
  
  console.log('App component rendered')
  return (
    <Router>
      <div className="App text-light">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={< Home />} />
          <Route path='addnew' element={<AddNew/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
