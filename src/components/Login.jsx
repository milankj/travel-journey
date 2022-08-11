import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login(props) {
    const [formData,setFormData] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate()
    const [isLoading,setLoading] = useState(false)
    const [isAuth,setIsAuth] = useState(false)
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e)=>{
        setLoading(prevLoading=>!prevLoading)
        e.preventDefault()
        if(formData.username===''||formData.password===''){
            alert('Username or password is empty')
            setLoading(prevLoading=>!prevLoading)
            return
        }
        axios.post(`https://traveljournalapi.herokuapp.com/api/v1/users/login`,{...formData})
            .then(res=>{
                console.log(res)  
                if(res.status === 200){
                    console.log(res.data.token)
                    localStorage.setItem('token','Bearer '+res.data.token)
                    setLoading(prevLoading=>!prevLoading)
                    setIsLoggedIn(prevData=>!prevData)
                    navigate('/home')
                }
                if(res.status === 400){
                    console.log(res)
                }
            })
            .catch(err=>{
                console.log(err)
                alert(err)
                setLoading(prevLoading=>!prevLoading)
                return
            })
    }
    console.log(formData)
    console.log('Logged in : ',isLoggedIn)

    return (
        <div className="container h-100">
            
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6 form-background p-5 rounded-4 ">
                    <form className="form mb-4" onSubmit={handleSubmit}>
                        <div className="form-group pb-5">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control username"
                                id="username"
                                placeholder="Enter Username"
                                name="username"
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
                                Login
                        </button>
                    </form>
                    <div className='text-center'>
                    <a className='text-light' href='/register'>Doesn't Have an Account?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login