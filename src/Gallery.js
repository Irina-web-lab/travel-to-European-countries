import { useState } from "react";
import './App.css';
import { slides } from "./slides";

function Gallery() {
    const [picture, setPicture] = useState(0);
    const {id, pic, depiction} = slides[picture];    

const perviousPicture = () => {
    setPicture ((picture => {
        picture --;
        if (picture < 0) {
            return slides.length - 1;
        }
        return picture;
    }))
}

const nextPicture = () => {
    setPicture ((picture => {
        picture ++;
        if (picture > slides.length - 1) {
            picture = 0;
        }
        return picture;
    }))
}

const [showText, setShowText] = useState(false);

return (<div> 

<div className='gallery container'>
                <h2>Galleri</h2>
                </div>
                <div className='carousel container'>
<div className='city container'>
                <h2 className='city'>{id}</h2>
                </div>

<div className="container">
                <img className='picture' src={pic} width='800px' height='500px' alt='City'/>
                </div>

<div className="container">
                <p>{showText ? depiction : depiction.substring(0,240) + '  ....'}
                <button className='slides btn' onClick={() => setShowText(!showText)}>{showText ? 'Vis mindre' : 'Vis mer'}</button>
                </p>
                </div>

<div className="btn-container">
                <button className='button' onClick={perviousPicture}>TILBAKE</button>
                <button className='button' onClick={nextPicture}>NESTE</button>
                </div>
            </div>
        </div>)
}


export default Gallery;
