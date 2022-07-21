import OrderItem from './order_item';

let Order_data=[
    {
        id:'m-4',
        name:'Redmi 10 Prime 5G (Lake Blue, 8GB RAM)',
        img:'./mob_img/mob4.jpg',
        price:'49,990',
        offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
        order:'Get it by Tuesday, February 1',
        cap1:'FREE Delivery by',
        cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
    },
{
    id:'bs-2',
    name:'OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation',
    img:'./bestSeller_img/bs2.jpg',
    price:'30,990',
    offer:'Flat INR 5000 Off on STATE_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 4',
    cap1:'Delivery Charge Applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 8 Months for Accessories'
},

];

let Order=()=>{
    return(
        
        <div>
            {
                Order_data.map(
                    data=>(
                        <OrderItem name={data.name} img={data.img} price={data.price} offer={data.offer} order={data.order} cap1={data.cap1} cap2={data.cap2} />
                    )
                )

            }
        </div>
    );

}

export default Order;
