import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import AddNew from './components/AddNew'
import ProtectedRoutes from './components/ProtectedRoute'
function App() {
  
  console.log('App component rendered')
  return (
    <div className="App bg-dark text-light">
        <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route element={<ProtectedRoutes/>}>
              <Route path='/home' element={< Home />} />
              <Route path='/:home/addnew' element={<AddNew/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </Router>
      </div>
  )
}

export default App
