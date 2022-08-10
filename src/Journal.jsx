import React from 'react'

export default function Journal(props){
    console.log(props)
    return(
        <div className='journey-content col-10 mx-auto mt-5 d-md-flex justify-content-between p-4'>
           <img className='journey-img img-fluid me-5' src={props.imageUrl}width="200" alt='image'/>
            <div className='journey-text'>
            <span className='mr-4 location-tag'><img className='location-icon' src='https://cdn-icons-png.flaticon.com/128/684/684908.png'/>{props.location}</span>
            <a href={props.googleMapsUrl} className='google-map-link'>View on Google Maps</a>
            <h1><b>{props.title}</b></h1>
            <p><b>{props.startDate} - {props.endDate}</b></p>
            <p>{props.description}</p>
            </div>
        </div>
    )
}