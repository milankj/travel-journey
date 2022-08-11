import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Register() {
    const [userData,setUserData] = useState({
        username:"",
        fullName:"",
        password:""
    })
    const [isLoading,setIsLoading] = useState(false)
    const handleChange = (e)=>{
        const {name,value} = e.target
        setUserData(prevData=>{
            return{
                ...prevData,
                [name] : value
            }
        })
    }
    const navigate = useNavigate()
    const handleSubmit = (e)=>{ 
        setIsLoading(prevLoad=>!prevLoad) 
        e.preventDefault()
        axios.post(`https://traveljournalapi.herokuapp.com/api/v1/users`,{...userData})
            .then(res=>{
                if(res.status===201){
                    setIsLoading(prevLoad=>!prevLoad)
                    alert('User Registered')
                    navigate('/home') 
                }
            })
            .catch(err=>{
                console.log(err)
                alert(err)
                return
            })
    }
    console.log(userData)
  return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6 form-background p-5 rounded-4">
                    <form className="form mb-4" onSubmit={handleSubmit}>
                        <div className="form-group pb-5">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control username"
                                id="username"
                                placeholder="Enter Username"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group pb-5">
                            <label htmlFor="fullName">Enter FullName</label>
                            <input
                                type="text"
                                className="form-control fullName"
                                id="fullName"
                                placeholder="Enter Fullname"
                                name="fullName"
                                value={userData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control password"
                                id="password"
                                placeholder="Enter Password"
                                name="password"  
                                value={userData.password}
                                onChange={handleChange}                              
                            />
                        </div>
                        <button
                            disabled={isLoading}
                            className="
                                btn 
                                btn-primary 
                                btn-customized
                                submit-button 
                                mt-3 "
                            >
                                Register
                        </button>
                    </form>
                    <div className='text-center'>
                    <a className='text-light' href='/'>Already has an account?</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register