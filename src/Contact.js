import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {

    const [userData, setUserData]= useState({
        name:"",
        email:"",
        subject:"",
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
        const {name,email,subject,message}= userData;
        if(name && email && subject && message){

        
        const res= fetch('https://restaurant-c702c-default-rtdb.firebaseio.com/userDataRecords.json',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name,email,subject,message
            })
        }
        );
        
        if(res){
            setUserData({
                name,email,subject,message
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
            <h1 class="display-2 text-white mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase ">
                    <li class="breadcrumb-item"><Link to="/" class="text-light">Home</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="container">
        <div class="text-center animated slideInUp">
            <h5>Contact Us</h5>
            <h1 class="mb-5">Contact For Any Quer</h1>
        </div>

        <div class="row g-4">
            <div class="col-12">
                <div class="row gy-4 text-center">
                    <div class="col-md-4">
                        <h5 class="text-primary">Booking</h5>
                        <p><MailOutlineIcon/> book@example.com</p>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-primary">General</h5>
                        <p><MailOutlineIcon/> info@example.com</p>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-primary">Technical</h5>
                        <p><MailOutlineIcon/> tech@example.com</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-12 d-flex flex-wrap">
        <div class="col-md-6 mt-4">
        <iframe class="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.9997256305!2d72.86834910725678!3d19.016278977914624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702381681220!5m2!1sen!2sin"  style={{minHeight: "350px",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="col-md-6 mt-4">
            <form>
                <div class="row g-3 p-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="" name="name" placeholder="Your Name" value={userData.name} onChange={postUserData}/>
                            <label for="name">Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="" name="email" placeholder="Your Email" value={userData.email} onChange={postUserData}/>
                            <label for="email">Your Email</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="" name="subject" placeholder="Subject" value={userData.subject} onChange={postUserData}/>
                            <label for="subject">Subject</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a message here" id="" name="message" value={userData.message} onChange={postUserData} style={{height: "150px"}}></textarea>
                            <label for="message">Message</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit" onClick={submitData} >Send Message</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}
