import React from 'react'

import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import img1 from './Image/b1.jpg'
import img2 from './Image/b2.jpeg'
import img3 from './Image/b3.jpg'
import img4 from './Image/b4.jpg'
import img5 from './Image/b5.jpg'
import img6 from './Image/b6.webp'
import img11 from './Image/l1.webp'
import img22 from './Image/l2.webp'
import img33 from './Image/l3.jpg'
import img44 from './Image/l4.webp'
import img55 from './Image/l5.webp'
import img66 from './Image/l6.jpg'
import imgg1 from './Image/d1.jpg'
import imgg2 from './Image/d2.webp'
import imgg3 from './Image/d3.jpg'
import imgg4 from './Image/d4.webp'
import imgg5 from './Image/d5.webp'
import imgg6 from './Image/d6.jpg'


export default function Menu() {
  return (
    <>
    <div class="container-xxl py-5 mb-5 d1">
        <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-2 text-white mb-3 animated slideInDown">Food Menu</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase ">
                    <li class="breadcrumb-item"><Link to="/" class="text-light">Home</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="container">
        <div class="text-center animated slideInUp">
            <h5>Food Menu</h5>
            <h1>Most Popular Items</h1>
        </div>
    </div>
    <div class="text-center">
    <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 animated slideInUp">
        <li class="nav-item s1 border border-dark-subtle">
            <Link class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"  data-bs-toggle="pill" to="#tab-1">
                <i><FreeBreakfastIcon fontSize="large"/></i>
                <div class="ps-3">
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0">Breakfast</h6>
                </div>
            </Link>
        </li>
        <li class="nav-item s1 border border-dark-subtle">
            <Link class="d-flex align-items-center text-start mx-3 ms-0 pb-3" data-bs-toggle="pill" to="#tab-2">
                <i><LunchDiningIcon fontSize="large"/></i>
                <div class="ps-3">
                    <small class="text-body">Special</small>
                    <h6 class="mt-n1 mb-0">Launch</h6>
                </div>
            </Link>
        </li>
        <li class="nav-item s1 border border-dark-subtle">
            <Link class="d-flex align-items-center text-start mx-3 ms-0 pb-3" data-bs-toggle="pill" to="#tab-3">
                <i><RestaurantIcon fontSize="large"/></i>
                <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Dinner</h6>
                </div>
            </Link>
        </li>
    </ul>

    <div class="tab-content container">
        <div id="tab-1" class="tab-pane fade show p-0 active pb-5">
            <div class="row g-4">
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img1} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Dosa</span>
                            <span class="text-primary">₹ 80</span>
                            </h5>
                            <small class="fst-italic">Dosa from this restaurant with their spicy masala and crisp dosa felt special.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img2} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Poha</span>
                            <span class="text-primary">₹ 40</span>
                            </h5>
                            <small class="fst-italic">Make soft and Delicious Poha.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img3} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Paratha</span>
                            <span class="text-primary">₹ 60</span>
                            </h5>
                            <small class="fst-italic">made with whole wheat flour (atta), salt, water & ghee or oil.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img4} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Idli</span>
                            <span class="text-primary">₹ 50</span>
                            </h5>
                            <small class="fst-italic"> made from fermented rice and lentil batter.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img5} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Dhokla</span>
                            <span class="text-primary">₹ 60</span>
                            </h5>
                            <small class="fst-italic">made with ground, fermented batter of rice and lentils like chana dal or urad dal</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img6} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Sandwich</span>
                            <span class="text-primary">₹ 100</span>
                            </h5>
                            <small class="fst-italic"> vegetables, sliced cheese or meat, placed on or between slices of bread.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="tab-2" class="tab-pane fade show p-0 pb-5">
            <div class="row g-4">
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img11} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Masala Bhindi</span>
                            <span class="text-primary">₹ 150</span>
                            </h5>
                            <small class="fst-italic">A delicious dish made with freshly bought okra.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img22} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Chana Kulcha</span>
                            <span class="text-primary">₹ 70</span>
                            </h5>
                            <small class="fst-italic">A classic dish that never goes out of style.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img33} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Shahi Egg Curry</span>
                            <span class="text-primary">₹ 120</span>
                            </h5>
                            <small class="fst-italic">Eggs are a versatile food that can be cooked for any meal of the day. </small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img44} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Gujarati Kadhi</span>
                            <span class="text-primary">₹ 50</span>
                            </h5>
                            <small class="fst-italic">A staple in almost every household, Gujarati kadhi is a lovely curry.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={img55} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Allahabad Ki Tehri</span>
                            <span class="text-primary">₹ 140</span>
                            </h5>
                            <small class="fst-italic">vegetable pulao, this one pot rice meal is unique to the rich</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={img66} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Low Fat Dahi Chicken</span>
                            <span class="text-primary">₹ 200</span>
                            </h5>
                            <small class="fst-italic"> chicken curry made with marinated pieces of chicken, turmeric, red chilli</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div id="tab-3" class="tab-pane fade show p-0 pb-5">
            <div class="row g-4">
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={imgg1} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Lemon Chicken</span>
                            <span class="text-primary">₹ 200</span>
                            </h5>
                            <small class="fst-italic">Lemon, chicken, dried chilli, garlic and some seriously delectable.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={imgg2} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Chettinad Fish Fry</span>
                            <span class="text-primary">₹ 250</span>
                            </h5>
                            <small class="fst-italic">Get your daily dose of perfect protein.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={imgg4} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Guilt-Free Galouti Kebab  </span>
                            <span class="text-primary">₹ 220</span>
                            </h5>
                            <small class="fst-italic">If you want good food but kind that doesn't go straight to your hip.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={imgg3} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Dum Aloo Lakhnawi</span>
                            <span class="text-primary">₹ 150</span>
                            </h5>
                            <small class="fst-italic">fantastic bowl of dum aloo cooked Lakhnawi style.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInLeft">
                    <div class="d-flex align-items-center">
                        <img src={imgg5} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Keema Biryani</span>
                            <span class="text-primary">₹ 140</span>
                            </h5>
                            <small class="fst-italic"> biryani made with minced meat, almonds, raisins, yogurt, onions, garlic, ginger.</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 s1 animated slideInRight">
                    <div class="d-flex align-items-center">
                        <img src={imgg6} class="img-fluid rounded" style={{width:"80px"}}/>
                        <div class="w-100 d-flex flex-column text-start ps-4">
                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>Dum Paneer Kali Mirch</span>
                            <span class="text-primary">₹ 200</span>
                            </h5>
                            <small class="fst-italic"> Small chunks of paneer cooked with cinnamon, fried onions, black pepper, ginger, garlic.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    </>
  )
}
