import { useState } from 'react';
import { slides } from './slides';
import './App.css';

function Gallery() {

      const [place, setPlace] = useState(0);
      const [showText, setShowText] = useState(false);
      /* console.log(slides[place]) */

      const perviousPlace = () => {
      setPlace((place => {
      place --;
      if (place < 0) {
      return slides.length - 1;
  }
      return place;
  }))
}
const nextPlace = () => {
    setPlace((place => {
      place ++;
      if (place > slides.length - 1) {
      place = 0;
  } 
      return place;
  }))
}

      const showTextClick = (place) => {
                place.showMore = !place.showMore
                setShowText(!showText);
  }

  return (<div>
    <div className='gallery container'>
                <h2>Galleri</h2>
                </div>
      {place.map((place => {
      const {id, picture, depiction, showMore} = slides[place];

return (<div>
<div key={id}>
  
<div className='carousel container'>
<div className='city container'>
                <h2 className='city'>{id}</h2>
                </div>

<div className="container">
                <img className='picture' src={picture} width='800px' height='500px' alt='City'/>
                </div>

<div className="container">
                <p>{showMore ? depiction  : depiction.substring(0, 230) + "..."}
                <button onClick={() => showTextClick(id)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
                </div>

<div className="btn-container">
                <button className='button' onClick={perviousPlace}>TILBAKE</button>
                <button className='button' onClick={nextPlace}>NESTE</button>
                </div>
            </div>
        </div>
    </div>)
    }))}
  </div>
  )}


export default Gallery;

