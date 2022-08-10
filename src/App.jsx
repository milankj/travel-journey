import Journal from './Journal'
import Nav from './Nav'
import data from './data'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={< Home/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
