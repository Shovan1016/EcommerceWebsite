let CartItem=(props)=>
{
    return(
        <div className="flex mt-5 mb-5 justify-around bg-gray-200 pt-7 pb-7 rounded-3xl border-2 border-black">
      <div>
          <img src={props.img}/>
      </div>

      <div className="flex flex-col justify-center">
          <span className="font-serif text-3xl font-bold mb-1">{props.name}</span>
          <span className="text-2xl font-bold mb-1">₹{props.price} </span>
          <span className=" mb-1">{props.offer}</span> 
          <span className=" mb-1"> {props.order}</span>
          <span className=" mb-1"> {props.cap1} <span className="font-bold"> Shopping Karo</span></span>
          <span className=" mb-1">{props.cap2}</span>

      </div>

      <div className="flex flex-col justify-center">
          <button className="bg-yellow-300 mb-4 p-5 w-72 font-bold text-3xl rounded-3xl border-2 border-black hover:bg-yellow-500"> <span> Buy Now</span> <span></span> </button>
          <button className="bg-red-500 p-5 w-72 font-bold text-3xl rounded-3xl border-2 border-black hover:bg-red-700"> <span> Remove</span> <span></span> </button>


      </div>
  </div>
    );
}
export default CartItem;