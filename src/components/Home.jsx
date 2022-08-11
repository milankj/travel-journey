import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import Journal from '../Journal'
import data from '../data'
import axios from 'axios'
import Loader from './Loader'
import Cookies from 'js-cookie'
function Home(props) {
  const [places, setPlaces] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios.get(`https://traveljournalapi.herokuapp.com/api/v1/places?sort=title`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        setIsLoading(prevState => !prevState)
        if (res.status === 200) {
          setPlaces(res.data.result)
          console.log(res.data)
          console.log('Cookie : ',Cookies.get('jwt'))
          setIsLoading(prevState => !prevState)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log('Logged in ', props.isLoggedIn)
  return (
    places === null ? <Loader /> : <div className='bg-dark text-light'>
                                      <Nav
                                        isLoggedIn={props.isLoggedIn}
                                        setIsLoggedIn={props.setIsLoggedIn}
                                      />
                                      <div className='text-center'>
                                      <a className='display-5 add-new-icon' href='/addnew'>
                                        <i class="bi bi-plus-square"></i>
                                        <i class="bi bi-plus-square-fill"></i>
                                      </a><br />
                                      <span>Add New</span>
                                      </div>
                                      {places.map(place => <Journal
                                        {...place}
                                        key={place._id}
                                      />)}
                                    </div>
  )
} 2

export default Home