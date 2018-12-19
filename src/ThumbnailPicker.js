import React from 'react'
import './ThumbnailPicker.css'

const ThumbnailPicker = props => {
const images = props.images

    {props.images.map(image => { return(
        
        <section className="thumbnails">
            <ul>
                <li><img src={image} className="thumbnail-image" /></li>
            </ul>      
        </section>
    )}
    )}
}

export default ThumbnailPicker