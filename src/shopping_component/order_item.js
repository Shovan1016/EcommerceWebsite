let OrderItem=(props)=>
{
    return(
        <div className="flex mt-5 mb-5 justify-around bg-gray-200 pt-7 pb-7 rounded-3xl border-2 border-black">
      <div>
          <img src={props.img}/>
      </div>

      <div className="flex flex-col justify-center">
          <span className="font-serif text-3xl font-bold mb-1">{props.name}</span>
          <span className="text-2xl font-bold mb-1 text-green-700">Payment Done </span>
          <span className="text-4xl text-bold text-green-700 ">ORDERED</span>
          <span className="text-2xl">Thie product in Your Home, very soon</span>
          <span className="text-2xl text-blue-600 cursor-pointer">Track Your Delivary</span>
      </div>
  </div>
    );
}
export default OrderItem;