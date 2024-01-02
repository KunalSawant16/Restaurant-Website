import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


  

export default function Nav() {
    
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    
   
    
      
    
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand fw-bold fs-2 " to="/"><RestaurantIcon fontSize="large" />RESTORAN</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item" >
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="about">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="menu">Menu</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle active" to="page"  data-bs-toggle="dropdown">
                        Page
                    </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item active" to="team">Our Team</Link></li>
                        <li><Link class="dropdown-item" to="booking">Booking</Link></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="contact">Contact</Link>
                    </li>
                    { isAuthenticated && 
                    <li class="nav-item">
                    <p>{user.name}</p>
                    </li>
                    }

                    {isAuthenticated?(
                    <li class="nav-item">
                        <button class="btn btn-outline-dark py-1 px-3 fs-5 " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                    </li>
                    ):(
                    <li class="nav-item">
                        <button class="btn btn-outline-dark py-1 px-3 fs-5 " onClick={() => loginWithRedirect()}>LogIn</button>
                    </li>
                    )}
                
                </ul>

                


                <Link to="booking" class="btn btn-outline-dark py-1 px-3 fs-5">Book A Table</Link>
                   
                </div>
            </div>
        </nav>
    </>
  )
}
