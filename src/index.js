import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import'./Style.css'
import './animate.css'
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Menu from './Menu.js';
import Team from './Team.js';
import Booking from './Booking.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Auth0Provider
    domain="dev-stwmrtoka02x6bjs.us.auth0.com"
    clientId="GuPQHJ3jEWsYA6025nEGhMRViTUHjWDh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  </Auth0Provider>
  </>
);

