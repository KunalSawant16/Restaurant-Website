import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from './Image/t1.webp'

export default function Booking() {
    const [userData, setUserData]= useState({
        name:"",
        email:"",
        datatime:"",
        setnumber:"", 
        message:"",
    })

    let name,value;
    const postUserData = (event) =>{
        name = event.target.name;
        value = event.target.value;

    setUserData({...userData,[name]:value});
    }

    const submitData = async (event) =>{
        event.preventDefault();
        const {name,email,datatime,setnumber,message}= userData;
        if(name && email &&datatime&&setnumber&&message){

        
        const res= fetch('https://restaurant-c702c-default-rtdb.firebaseio.com/userDataRecords.json',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name,email,datatime,setnumber,message
            })
        }
        );
        
        if(res){
            setUserData({
                name,email,datatime,setnumber,message
            })
            alert("Data Stored");
        }else{
                alert("pls fill the data");
            }
        }
        else{
            alert("pls fill the all data");
        }
    };

  return (
    <>
    <div class="container-xxl py-5 mb-5 d1">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-2 textnp-white mb-3 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase ">
                    <li class="breadcrumb-item"><Link to="/" class="text-light">Home</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Page</li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="container-xxl py-5 px-0">
        <div class="row g-0">
            <div class="col-lg-6 animated slideInLeft">
                <img src={img1} class="img-fluid i1" />
            </div>

            <div class="col-lg-6 d-flex align-items-center t2 animated slideInRight">
                <div class="p-5">
                <h5 class="text-start text-primary">Reservation</h5>
                <h1 class="text-white mb-4">Book A Table Online</h1>
                <form>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="" name="name" placeholder="name" value={userData.name} onChange={postUserData}/>
                            <label for="name">Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="" name="email" placeholder="email" value={userData.email} onChange={postUserData}/>
                            <label for="email">Your Email</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating date" id="date3" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" id="" name="datatime" placeholder="datatime" data-target="#date3" data-toggle="datetimepicker" value={userData.datatime} onChange={postUserData} />
                            <label for="datetime">Date & Time</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <select class="form-select" id="" name="setnumber" value={userData.setnumber} onChange={postUserData}>
                                <option value="1">People 1</option>
                                <option value="2">People 2</option>
                                <option value="3">People 3</option>
                            </select>
                            <label for="select1">No Of People</label>
                            </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="message" id="" name="message" style={{height: "100px"}} value={userData.message} onChange={postUserData}></textarea>
                            <label for="message">Special Request</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Book Now</button>
                    </div>
                </div>
                </form>
                </div>
            </div>

        </div>
    </div>
    
    </>
  )
}
