import React from 'react';
import image from './assets/Mario and Adrian A.jpg';
import greek from './assets/greek salad.jpg';
import bru from './assets/bruchetta.svg';
import lemon from './assets/lemon dessert.jpg';
import user from './assets/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import image2 from './assets/restaurant chef B.jpg';
import { useState, useReducer } from 'react';
import Booking from './BookinPage.js';
import {fetchAPI} from './temp.js'

function Main() {


  function updateTimes(date) {
    console.log(fetchAPI(date));
    dispatch(fetchAPI(date));
    console.log(availableTimes)
}

const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);
console.log(availableTimes);

    return (
  <main>    
    
        <div className="container border-bottom" style={{marginTop:'50px',marginBottom:'50px'}}>
  <div className="row">
    <div className="col-sm" style={{textAlign:'left'}}>
    <h1>Little Lemon</h1>
    <h3 >Chicago</h3>
    <br/>
    <p>Little Lemon is a cozy and chic restaurant located in the heart of Chicago. With its warm and inviting atmosphere, it is the perfect spot for a romantic dinner or a casual meal with friends.</p>
          <button type="button" className="btn btn-primary btn-lg btn-dark" style={{marginTop:'100px', marginBottom:'30px'}}   >Reserve a Table</button>
    </div>
    <div className="col-sm" >
    <img src={image} className="img-fluid" alt="Responsive image" style={{ width: 'auto', height: '75%', margin: '0 auto',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} />
    </div>
  </div>
</div>
      





<div className="container border-bottom" style={{marginBottom:'50px'}}>




  
<div className="container" style={{marginTop:'100px',marginBottom:'50px'}}>
  <div className="row">
    <div className="col-sm" style={{textAlign:'left'}}>
    <h2>Specials</h2>
    </div>
    <div className="col-sm">
     
    </div>
    <div className="col-sm" >
    <button type="button" className="btn btn-primary btn-dark" >Online Menu</button>
    </div>
  </div>
 
</div>

<div style={{marginTop:'50px',marginBottom:'50px'}}>
  <div className="row">
    <div className="col-sm">
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={greek} alt="Card image cap"/>
  <div className="card-body" style={{textAlign:'left'}}>
  
  <div className="row">
  <div className="col">
  <h5 className="card-title">Greek Salad</h5>
  </div>
  <div className="col"style={{textAlign:'right'}}>
   <p className="text-warning ">$12.99</p></div></div>
    <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    <br/>
    <button type="button" className="btn btn-outline-dark">Order delivery</button>
  </div>
</div>
    </div>
    <div className="col-sm" >
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={bru} alt="Card image cap"/>
  <div className="card-body" style={{textAlign:'left'}}>
  <div className="row">
  <div className="col">
  <h5 className="card-title">Bruchetta</h5>
  </div>
  <div className="col"style={{textAlign:'right'}}>
   <p className="text-warning">$5.99</p></div></div>
    <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
    <br/><br/>
    <button type="button" className="btn btn-outline-dark">Order delivery</button>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={lemon} alt="Card image cap"/>
  <div className="card-body" style={{textAlign:'left'}}>
  <div className="row">
  <div className="col">
  <h5 className="card-title">Lemon Dessert</h5>
  </div>
  <div className="col"style={{textAlign:'right'}}>
   <p className="text-warning">$5.00</p></div></div>
    <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
    <br/>
    <button type="button" className="btn btn-outline-dark">Order delivery</button>
  </div>
</div>
    </div>
  </div>
</div>
</div>    




<div className="container border-bottom" style={{marginBottom:'100px'}}>


<div className="col-sm">
<h2>Testimonials</h2>

</div>
<div className="row" style={{marginTop:"75px", marginBottom:'50px'}}>


  <div className="col-sm"> 
  
  <p> Rating <FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /></p>
  <img src={user} alt={user} className="rounded-circle" width={125} height={125}/>
  <h6 className="card-title">James Smith</h6>
  <cite title="Source Title">-Just Perfect-</cite>

  
  </div>



  <div className="col-sm"><p> Rating <FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /></p>
  <img src={user} alt={user} className="rounded-circle" width={125} height={125}/>
  <h6 className="card-title">John Larson</h6>
  <cite title="Source Title">-Excellent service-</cite>
  </div>
  

  <div className="col-sm"><p> Rating <FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /></p>
  <img src={user} alt={user} className="rounded-circle" width={125} height={125}/>
  <h6 className="card-title">Matt Damon</h6>
  <cite title="Source Title">-Delicious-</cite>
  
  </div>
  <div className="col-sm"><p> Rating <FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /><FontAwesomeIcon icon={faStar} color="yellow" /></p>
  <img src={user} alt={user} className="rounded-circle" width={125} height={125}/>
  <h6 className="card-title">Lois Clark</h6>
  <cite title="Source Title">-Perfect-</cite>
  </div>
</div>



</div>



<div className="container" style={{marginTop:'50px'}}>
  <div className="row">
    <div className="col-sm" style={{textAlign:'left'}}>
    <h1>Little Lemon</h1>
    <h3 >Chicago</h3>
    <br/>
    <p>Little Lemon is a cozy and chic restaurant located in the heart of Chicago. With its warm and inviting atmosphere, it is the perfect spot for a romantic dinner or a casual meal with friends. The menu features a variety of delicious dishes made with fresh, high-quality ingredients. Highlights include savory salads, hearty sandwiches, and mouthwatering entrees. The restaurant also boasts an impressive selection of wines, beers, and cocktails to complement your meal. Whether you're in the mood for a quick bite or a leisurely dinner, Little Lemon has something to satisfy every appetite.</p>
          
    </div>
    <div className="col-sm" >
    <img src={image2} className="img-fluid" alt="Responsive image" style={{ width: 'auto', height: '75%', margin: '0 auto',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} />
    </div>
  </div>
</div>


<Booking availableTimes={availableTimes} updateTimes={dispatch} />

      </main>
     







    );
  }
  
  export default Main;