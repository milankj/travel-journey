import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import Journal from '../Journal'
import data from '../data'
import axios from 'axios'
import Loader from './Loader'
function Home() {
  const [places, setPlaces] = useState(null)
  const[isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    axios.get(`https://traveljournalapi.herokuapp.com/api/v1/places`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        setIsLoading(prevState=>!prevState)
        if(res.status===200){
          setPlaces(res.data.result)
          console.log(res.data)
          setIsLoading(prevState=>!prevState)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log('Loading',isLoading)
  return (
    places ===null ? <Loader/> : <div><Nav />{places.map(place => <Journal {...place} key={place._id}/>)}</div>
  )
}

export default Home