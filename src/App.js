import { useState } from 'react';
import { data } from './data';
import './App.css';
import Gallery from './Gallery';

function App() {
 const [places, setPlaces] = useState(data, 
   [Gallery]);
/*   console.log(data);
 */ 

 const removePlaces = (id) => {
/*   console.log(id);
 */
 let newPlaces = places.filter(place => place.id !== id);
/*     console.log(newHotels);
 */ setPlaces(newPlaces);
}
/*  console.log(slides[place])
 */

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

 <div>
<Gallery/>
</div>
</div>
 )
}


export default App;

