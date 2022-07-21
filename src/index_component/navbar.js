
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import './navbar.css';
import logo from './nav_image/logo.png';
import location_img from './nav_image/location.png';
import india_flag from './nav_image/india.png';
import person_img from './nav_image/person.png';
import cart_img from './nav_image/cart.png';
import search_img from './nav_image/search.png';

let NavBar=()=>{
    return (
 
  <nav className='nav__bar'>

    <div className='mr-5'>
      <img src={logo} className="h-20"/>
    </div>
    <div className="flex cursor-pointer location__div">
      <div className="center__class">
          
        <img src={location_img} alt="" className="h-5"/>
      </div>

      <div className="center__class">Hello <br/>select Your Address</div>
    </div>


    <div className="ml-7 flex ">

      <div className="center__class  "><input type="search" name="" id="" className="w-96 h-10 search__input border-4 border-cyan-500"/>
      </div>
      <div className="center__class p-2 bg-cyan-500 search__div mr-5 "><img src={search_img} alt="" 
          className="search__logo h-5"/></div>
    </div>
    <div className="center__class ">
      <img src={india_flag} alt="" className="bg-white h-10 ml-5"/>
    </div>
    <div className=" ml-10 mr-3 div__sign"><img src={person_img} className="h-14 ml-3"/>Hello, <span
        className="cursor-pointer" ><Link to="/signIn">Sign In</Link></span></div>
    <div className="ml-4 mr-4 return__order cursor-pointer div__return"><Link to="/order">Return <br/><span className="font-bold">& Orders</span></Link>
    </div>
    <Link to="/cart">
    <div className="div__cart cursor-pointer">
      
      <div><img src={cart_img} alt="" className="h-20"/></div>
      <div className="cart__text">Cart</div>
    </div></Link>
  </nav>

);

 

};

export default NavBar;