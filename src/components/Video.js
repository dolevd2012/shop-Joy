import React from 'react'
import Category from './Categories'
function Video() {
    return (
        <div className="container-fluid px-0" style={{ position: 'relative' }}>
            <video className="myVideo" autoPlay muted loop>
                <source src='./images/A.mp4' type="video/mp4" />
            </video>
            <Category />
        </div>
    )
}
export default Video