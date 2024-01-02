import { Link } from '@mui/material'
import React from 'react'
import img1 from './Image/s1.jpg'
import img2 from './Image/s2.jpg'
import img3 from './Image/s3.jpg'
import img4 from './Image/s4.jpg'

export default function Team() {
  return (
    <>
    <div class="container-xxl py-5 mb-5 d1">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-2 text-white mb-3 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase ">
                    <li class="breadcrumb-item"><Link to="/" class="text-light">Home</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Page</li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="container">
        <div class="text-center mb-5 animated slideInUp">
            <h5>Team Members</h5>
            <h1>Our Master Chefs</h1>
        </div>

        <div class="row g-4">
            <div class="col-lg-3 col-md-6 ss1 animated slideInLeft">
                <img src={img1} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInLeft">
                <img src={img2} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInLeft">
                <img src={img3} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInLeft">
                <img src={img4} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 ss1 animated slideInRight">
                <img src={img4} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInRight">
                <img src={img3} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInRight">
                <img src={img2} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ss1 animated slideInRight">
                <img src={img1} class="card-img-top rounded-circle overflow-hidden p-1" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="mb-0 p-2">Vikas Khanna</h5>
                    <p class="card-text">He is a Michelin star chef and 6 years of experience</p>
                </div>
            </div>
        </div>


    </div>

    </>
  )
}
