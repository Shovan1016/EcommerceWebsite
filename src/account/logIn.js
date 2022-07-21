import { Link } from "react-router-dom";
let LogIn=()=>
{
    return(
        <div className="flex justify-center bg-cyan-200">
      <div>
  
      <div className="mt-6 mb-6">
  
      <div className="mt-6 mb-6">
        <span className="font-serif text-3xl">Enter Mobile-No : </span>
        <span><input type="number" name="" id="" placeholder="Enter Mobile No" className="font-serif text-3xl border-2 border-blue-500 rounded-lg hover:bg-green-100 focus:bg-green-200"/></span>
      </div>
      <div className="mt-6 mb-6">
        <span className="font-serif text-3xl">Enter passwoard : </span>
        <span><input type="password" name="" id="" placeholder="Enter Passwoard" className="font-serif text-3xl border-2 border-blue-500 rounded-lg hover:bg-green-100 focus:bg-green-200"/></span>
      </div>
    
      <div className="flex justify-center  items-center"><div className=" mb-6"><button type="submit" className="w-96 p-3 bg-green-500 text-white font-bold text-3xl rounded-xl">Log in</button></div></div>
     <div className="flex justify-center  items-center"><div className=" mb-4 text-2xl">Fast time to our Website Please,<span className="font-bold cursor-pointer"><Link to="/signIn">Sign In</Link></span> </div></div> 
      
    </div>
  </div>
  </div>
    );
}
export default LogIn;