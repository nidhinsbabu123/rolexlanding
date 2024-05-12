import React from 'react'
import videoBg from '../Assets/videoBg.mp4'

function Welcomevideo() {
  return (
    <div className='mainVideo'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
            <p>THE COLLECTION</p>
            <h1>Rolex Watches</h1>
        </div>
    </div>
  )
}

export default Welcomevideo