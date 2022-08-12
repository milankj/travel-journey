import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'

function ProtectedRoutes({component : Component, ...rest}) {
  return (
    localStorage.getItem('token') ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes