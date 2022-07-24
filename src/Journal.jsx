import React from 'react'

        // title: "Mount Fuji",
        // location: "Japan",
        // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        // startDate: "12 Jan, 2021",
        // endDate: "24 Jan, 2021",
        // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        // imageUrl: "https://source.unsplash.com/WLxQvbMyfas"

export default function Journal(props){
    console.log(props)
    return(
        <div className='journey-content col-10 mx-auto mt-5 d-md-flex justify-content-between p-4'>
           <img className='journey-img img-fluid mr-4' src={props.imageUrl}width="200" alt='image'/>
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