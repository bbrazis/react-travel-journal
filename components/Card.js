import React from 'react'
import Pin from '../icons/LocationPin'

export default function Card(props) {
    const {id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
    
    return (
        <div className="card">
            <div className="card--img-wrapper">
                <img src={imageUrl} alt={title} className="card--img" />
            </div>
            <div className="card--content">
                <div className="card--eyebrow-items">
                    <Pin />
                    <span className="card--location">{location}</span>
                    <a href={googleMapsUrl} target="_blank">
                        <span>View on Google Maps</span>
                    </a>
                </div>
                <h1>{title}</h1>
                <div className="card--dates">
                    <span>{startDate}</span><span>&nbsp;-&nbsp;</span><span>{endDate}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}