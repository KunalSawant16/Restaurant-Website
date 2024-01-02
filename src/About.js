import React from 'react'
import img1 from './Image/r1.avif'
import img2 from './Image/r2.avif'
import img3 from './Image/r3.avif'
import img4 from './Image/r4.avif'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>  
    <div class="container-xxl py-5 mb-5 d1">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-2 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase ">
                    <li class="breadcrumb-item"><Link to="/" class="text-light">Home</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
        <div class="container-xxl">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-start ">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={img1}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={img2} style={{marginTop: "15%"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={img3}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={img4}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 animated slideInUp">
                        <h5 class="text-primary text-start">About Us :---</h5>
                        <h1 class="mb-4 display-5">Welcome To Restaurant</h1>
                        <p class="mb-4 ">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat</p>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <div class="row g-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center px-3 border-start border-5 border-primary">
                                    <h1>15</h1>
                                    <div class="ps-4">
                                        <p class="mb-0">Years of</p>
                                        <p class="mb-0 text-uppercase">Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center px-3 border-start border-5 border-primary">
                                    <h1>50</h1>
                                    <div class="ps-4">
                                        <p class="mb-0">Popular</p>
                                        <p class="mb-0 text-uppercase">Master Chefs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link class="btn btn-primary py-2 px-4 mt-3" href="">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
