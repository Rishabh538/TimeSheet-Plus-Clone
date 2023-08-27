import React from 'react'
import './Card.css'

function OffersCard(props) {
  return (
    <div className='card-container1'>
        <div className='image-container1'>
            <img src={props.image} alt="" />
        </div>
        <div className='card-content1'>
            <div className='card-title'>
                <h4>{props.title}</h4>
            </div>
        </div>
        
    </div>
  )
}

export default OffersCard