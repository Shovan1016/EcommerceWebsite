import React,{useState} from 'react';
import './nav_menu.css';
import nav_menu_img from './nav_image/nav_menu.jpg'
import { Link } from "react-router-dom";


let NavMenu=()=>
{
    return(
        <div
    className="nav_bar_under flex justify-around  items-center pt-3 pb-2 border-t-2 border-b-2 border-y-black font-serif ">
    <div className="hover__nav_under"> <a href=""> <Link to="/">Home</Link></a></div>
    <div className="hover__nav_under"><Link to="/bestSeller">Best Sller</Link></div>
    <div className="hover__nav_under"><Link to="/mobile">Mobile</Link></div>
    <div className="hover__nav_under"><Link to="/todayDeal">Today's Deal</Link></div>
    <div className="hover__nav_under">Electronics</div>
    <div className="hover__nav_under">Coustomer Service</div>
    <div className="hover__nav_under">Prime</div>
    <div className="hover__nav_under">Fashion</div>
    <div className="hover__nav_under">Home & Kitchen</div>
    <div className="hover__nav_under">Books</div>

    <div className="hover__nav_under"><img src={nav_menu_img} alt="" /></div>
  </div>
    );
}
export default NavMenu;