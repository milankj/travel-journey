import React from 'react'
import {Route} from 'react-router-dom'

function ProtectedRoute({component : Component, ...rest}) {
  return (
    <Route 
        {...rest}
        render={(props)=>{
           if(localStorage.getItem('token')) 
            return <Component {...props}/>
        }}
    />
  )
}

export default ProtectedRoute