import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <>
<footer class="text-center text-lg-start bg-info text-muted">

<div class="container py-5">
    <div class="row g-5">
        <div class="col-lg-3 col-md-6">
            <h4 class="text-start mb-4">Company</h4>
            <Link class="btn btn-link" to="about">About Us</Link>
            <Link class="btn btn-link" to="contact">Contact Us</Link>
            <Link class="btn btn-link" to="booking">Booking</Link>
            
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class="text-start mb-4">Contact</h4>
            <p class="mb-2"><LocationOnIcon/>123 Street, New York, USA</p>
            <p class="mb-2"><CallIcon/>+012 345 67890</p>
            <p class="mb-2"><EmailIcon/> info@example.com</p>
            
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class="text-start  mb-4">Opening</h4>
            <h5 class="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 class="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class=" text-start  mb-4">Subscribe to our newsletter</h4>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                <input class="form-control border-dark w-100 py-2 ps-4 pe-5" type="text" placeholder="Your email"/>
                <button type="button" class="btn btn-dark py-0 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
        </div>
    </div>
</div>

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-top">
    <div class="me-5 d-none d-lg-block ">
      <span style={{color:"black"}}>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i><FacebookIcon/></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i><TwitterIcon/></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i><InstagramIcon/></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i><GoogleIcon/></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i><LinkedInIcon/></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i><GitHubIcon/></i>
      </a>
    </div>
  </section>
  
</footer>


    </>
  )
}
