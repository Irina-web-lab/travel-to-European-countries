import { useState } from 'react';
import { data } from './data';
import { slides } from './slides';
import './App.css';

function App() {
 const [places, setPlaces] = useState(data);
/*   console.log(data);
 */ 

 const removePlaces = (id) => {
/*   console.log(id);
 */
 let newPlaces = places.filter(place => place.id !== id);
/*     console.log(newHotels);
 */ setPlaces(newPlaces);

}

const [place, setPlace] = useState(0);
const {id, picture, depiction} = slides[place];
/* console.log(slides[place])
 */

const perviousPlace = () => {
    setPlace((place => {
 place --;
 return place;
 }))
 }
 const nextPlace = () => {
    setPlace((place => {
 place ++;
 }))
 }

 return (<div>
 <div className='container'>
 <h1>Steder i Europa jeg ønsker å besøke</h1>
 </div>
 {places.map((element => {
 const {id, country, city, image} = element;
 return (<div key={id}>
  <div className='full container'>
  <div className='container'>
  <img src={image} alt='place' width='400px' height='250px'/>
  </div>
 
 <div key={id}>
 <div className='country-city container'>
 <h3>{id}. {country}, {city}</h3>
 </div>
 </div> 
 <div className='container'>
 <button className='btn' onClick={() => removePlaces(id)}>VAR HER ALLEREDE</button> 
 </div>
 </div>
 </div>) 
 }))}
 <div className='container'>
 <button className='btnDel' onClick={() => setPlaces([])}>SLETT ALT</button>
 </div>


<div className='carousel container'>
    <div className='gallery container'>
 <h1>Gallerie</h1>
 </div>

 <div className='city container'>
<h2 className='city'>{id}</h2>
</div>

 <div className="container">
 <img src={picture} width='800px' height='500px' alt='City'/>
 </div>

 <div>
 <h2 className="description container">{depiction}</h2>
 </div>

 <div className="btn-container">
 <button className='button' onClick={perviousPlace}>TILBAKE</button>
 <button className='button' onClick={nextPlace}>NESTE</button>
 </div>

 </div>

 </div>
 )
}


export default App;
