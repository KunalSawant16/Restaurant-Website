import React from 'react'
import { Link } from 'react-router-dom'

import img1 from './Image/round.png'
import Person4Icon from '@mui/icons-material/Person4';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function Home() {
  return (
    <> 
    <section>
    <div class="container-fluid">
        <div class="container py-5">
            <div class="row align-items-center g-5 py-5 fw-bold">
            <div class="col-lg-6 text-center text-lg-start ">
                <h1 class="display-3 text-white animated slideInLeft ">Enjoy Our<br/>Delicious Meal</h1>
                <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <Link to="" class="btn bg-transparent btn-outline-light py-sm-3 px-sm-5 me-3 animated slideInLeft" style={{color:"white"}}>Book A Table</Link>
            </div>        
             
            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                <img class="img-fluid" src={img1} alt=""/>
            </div> 
            </div>      
        </div>
        
    </div>
    </section>
<div class="container py-5">
<div class="row g-4 animated slideInUp">
  <div class="col-lg-3 col-sm-6 ">
    <div class="card pt-3">
      <div class="card-body p-4">
        <Person4Icon  sx={{ fontSize: 70 }}/>
      <h5 class="mt-2">Master Chefs</h5>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6">
    <div class="card pt-3">
      <div class="card-body p-4">
      <RestaurantIcon  sx={{ fontSize: 70 }}/>
      <h5 class="mt-2">Quality Food</h5>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6">
    <div class="card pt-3">
      <div class="card-body p-4">
      <ShoppingCartIcon  sx={{ fontSize: 70 }}/>
      <h5 class="mt-2">Online Order</h5>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-sm-6">
    <div class="card pt-3">
      <div class="card-body p-4">
      <HeadsetMicIcon  sx={{ fontSize: 70 }}/>
      <h5 class="mt-2">24/7 Service</h5>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </div>
  </div>
  
</div>
</div>
    </>
  )
}
