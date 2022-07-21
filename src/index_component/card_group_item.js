


import './card_group_item.css';
let CardGroupItem=(props)=>
{
    console.log(props.title);
    return(
        

<div className="card_group_1 p-4 rounded-xl">
   <div className="ml-2 font-serif text-3xl">{props.title}</div>
   <div className="flex justify-around">
     <div><img src={props.img1} className="cursor-pointer"/>{props.name1}</div>
     <div><img src={props.img2} alt="" className="cursor-pointer"/>{props.name2}</div>
   </div>
   <div className="flex justify-around">
    <div><img src={props.img3} className="cursor-pointer"/>{props.name3}</div>
    <div><img src={props.img4} alt="" className="cursor-pointer"/>{props.name4}</div>
  </div>
 </div>
 

);
}

export default CardGroupItem;