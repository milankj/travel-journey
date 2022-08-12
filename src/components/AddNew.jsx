import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
function AddNew() {
    const [isLoading,setIsLoading] = useState(false)
    const [newPlace,setNewPlace] = useState({
        title: "",
        location: "",
        googleMapUrl: "",
        startDate: "", 
        endDate: "",
        description: "",
        imageUrl: ""

    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setNewPlace(prevPlace=>{
            return{
                ...prevPlace,
                [name]: value
            }
        })
    }
    const headers = {
        authorization : localStorage.getItem('token')
    }
    const navigate = useNavigate()
    console.log(headers)
    const handleSubmit = (e)=>{
        setIsLoading(prevLoad=>!prevLoad)
        e.preventDefault()
        if(newPlace.title===''||newPlace.location===''|| newPlace.googleMapUrl===''||newPlace.startDate===''||newPlace.endDate===''||newPlace.description===''||newPlace.imageUrl===''){
            alert('Field Empty!!')
            return
        }
        axios.post(`https://traveljournalapi.herokuapp.com/api/v1/places`,{...newPlace},{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res)
            setIsLoading(prevLoad=>!prevLoad)
            navigate('/home')
        })
        .catch(err=>{
            console.log(err)
            setIsLoading(prevLoad=>!prevLoad)
        })
    }
    console.log(newPlace)
  return (
    <div className='bg-dark'>
        <Nav/>
    <div className='container h-100'>
        <div className='row h-100 justify-content-center align-items-center pt-5'>
            <div className='col-10 col-md-8 col-lg-6 form-background p-5 rounded-4 text-center'>
            <h1> Add New Place</h1>
        <form  className='mt-5' onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
            <label htmlFor='title' className='mb-3'>Enter Place Name</label>
            <input
            className='form-control p-2' 
            type='text'
            placeholder='Enter Place Name'
            onChange={handleChange}
            value={newPlace.title}
            id='title'
            name='title'
            />
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='location' className='mb-3'>Enter Location</label>
            <input
            className='form-control p-2' 
            type='text'
            placeholder='Enter Location '
            onChange={handleChange}
            value={newPlace.location}
            id='location'
            name='location'
            />
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='googleMapUrl' className='mb-3'>Enter Google Map URL</label>
            <input
            className='form-control p-2' 
            type='text'
            placeholder='Enter Google Map URL'
            onChange={handleChange}
            value={newPlace.googleMapUrl}
            id='googleMapUrl'
            name='googleMapUrl'
            />
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='startDate'className='mb-3'>Enter Start Date</label>
            <input
            className='form-control p-2' 
            type='text'
            placeholder='eg: 04 March 2030'
            onChange={handleChange}
            value={newPlace.startDate}
            id='startDate'
            name='startDate'
            />
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='endDate' className='mb-3'>Enter End Date</label>
            <input
            className='form-control p-2' 
            type='text'
            placeholder='eg: 04 March 2030'
            onChange={handleChange}
            value={newPlace.endDate}
            id='endDate'
            name='endDate'
            />   
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='description' className='mb-3'>Description</label>
            <textarea
            className='form-control p-2' 
            type='textfield'
            placeholder='Desciption'
            onChange={handleChange}
            value={newPlace.description}
            id='description'
            name='description'
            />
            </div>
            <div className='form-group mb-3'>
            <label htmlFor='imageUrl' className='mb-3'>Image URL</label>
            <input
            className='form-control' 
            type='text'
            placeholder='Enter Image URL'
            onChange={handleChange}
            value={newPlace.imageUrl}
            id='imageUrl'
            name='imageUrl'
            />
            </div>
            <button 
                disabled={isLoading}
                className='btn btn-primary mt-4'>
                Add Place
            </button>
        </form>
            </div>
        </div>
            </div>
    </div>
  )
}

export default AddNew