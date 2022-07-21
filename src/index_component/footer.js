
import facebook from './social_media_icon/facebook.png';
import instagram from './social_media_icon/instagram.png';
import twitter from './social_media_icon/twitter.png';
import youtube from './social_media_icon/youtube.png';


let Footer =()=>
{
    return(
<div className="bg-black text-white  ">

            <div className="footter_container flex justify-around ">
              <div className="mt-5">
              <div className="text-3xl">Don't Miss out</div>
              <div>To get notified latest  news and <span className="font-serif text-2xl">Shopping Karo</span>  offers</div>
              <div className="mt-3 mb-3">
                <span>Email</span>
                <input type="email" name="" id="" placeholder="  Enter Email" className="ml-2 rounded-lg w-96 text-black"/>
             </div>
             <div>
               <input type="text" name="" id="" placeholder="  city" className="rounded-lg text-black w-32 mr-4"/>
               <input type="text" name="" id="" placeholder="  state" className="rounded-lg w-36 text-black mr-4"/>
               <input type="number" name="" id="" placeholder="  pin" className="rounded-lg w-24 text-black"/>
             </div>
             <div>
               <button type="submit" className="bg-white text-black p-2 w-48 rounded-lg font-serif font-bold mt-5 ml-28">Submit</button>
             </div>
            </div>
            
            
            <div className="mt-5">
              <div className="text-3xl">Coustomer services</div>
              <div className="cursor-pointer">Coustomer services</div>
              <div className="cursor-pointer">My Account</div>
              <div className="cursor-pointer">Offers</div>
            </div>
            
            <div className="mt-5">
              <div className="text-3xl">Helpfull links</div>
              <div className="cursor-pointer">Location</div>
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">Docs</div>
              <div className="cursor-pointer">Requrement</div>
              <div className="cursor-pointer">Blog</div>
              <div className="cursor-pointer">Galary</div>
              <div className="cursor-pointer">Product</div>
            </div>
            
            
            <div className="mt-5">
              <div className="mb-2 cursor-pointer"><img src={facebook} className="h-12"/></div>
              <div className="mb-2 cursor-pointer"><img src={instagram} className="h-12"/></div>
              <div className="mb-2 cursor-pointer"><img src={twitter} className="h-12"/></div>
              <div className="mb-2 cursor-pointer"><img src={youtube} className="h-12"/></div>
            </div>
              
            </div>
            <div className="flex justify-center"><span>By get notified , you understand and agree that data will be collected and used subject to our US <span className="text-blue-900 text-2xl font-serif cursor-pointer"> Policy</span> and <span class="text-blue-900 text-2xl font-serif cursor-pointer">Term of use</span></span></div>
            
            <div className="flex justify-center mb-3"><span>*Required information</span></div>
            
            <div clasNames="text-white border-2"></div>
            <div className="flex justify-evenly mt-2 mb-2">
              <div className="cursor-pointer">SET MAP</div>
              <div className="cursor-pointer">PRIVACY</div>
              <div className="cursor-pointer">USER CONTENT PERMISSION TERM</div>
              <div className="cursor-pointer">PRODUCT</div>
            </div>
            <div className="text-white border-2"></div>
            <div className="flex justify-evenly mt-2 pb-5">Disclaimer: Legal information is not legal advice, read the disclaimer. TermsFeed © 2012 - 2021</div>
            
            </div>
            );};

            export default Footer;