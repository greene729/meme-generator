import React, { Component } from 'react';

import walter from './images/Am-I-The-Only-One-Around-Here.jpg'
import brian from './images/Bad-Luck-Brian.jpg'
import keanu from './images/Conspiracy-Keanu.jpg'
import wonka from './images/Creepy-Condescending-Wonka.jpg'
import fry from './images/Futurama-Fry.jpg'
import picard from './images/Picard-Wtf.jpg'
import thinker from './images/Roll-Safe-Think-About-It.jpg'

import './App.css';

import ThumbnailPicker from './ThumbnailPicker'

class App extends Component {

    constructor() {
        super()
        this.state = { 
            currentImage: walter
        }
    }
        
        
        render() {
            const images = [walter, brian, keanu, wonka, fry, picard]
            return (
                <div className="App">
                    <header className="main-header">
                        <h1>Memes!</h1>
                    </header>
                    <main>
                        {<ul>
                            <ThumbnailPicker images />
                        </ul>}    
                        <div className="preview-and-inputs">
                            <section className="preview"></section>
                            <section className="text-inputs"></section>
                        </div>
                    </main>    
                    <footer><small>&copy; Your Sweet Bippy</small></footer>
                </div>
        );
    }
}


export default App;
