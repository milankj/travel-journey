import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
export default function Nav(){
    const navigate = useNavigate()
    const logout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
    return(
        <div className='navbar-custom d-flex justify-content-between p-3'>
            <div className='d-flex brand' onClick={()=>{nagivate('/home')}}>
            <img className='world-logo'  src='https://cdn-icons-png.flaticon.com/128/921/921439.png'/>
            <h3 className='journal-name mt-1'>my travel Journal.</h3>
            </div>
            <div className='align-self-end ml-auto -px-5'>
            <button className='btn btn-light ' onClick={logout}><i class="bi bi-box-arrow-left"></i></button>
            </div>
        </div>
    )
}