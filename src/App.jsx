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
    <div className="App bg-dark text-light">
        <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={< Home />} />
          <Route path='/:home/addnew' element={<AddNew/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </Router>
      </div>
  )
}

export default App
