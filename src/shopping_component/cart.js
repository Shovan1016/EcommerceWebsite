import CartItem from './cartItem';

let Cart_data=[
    {
        id:'bs-1',
        name:'URBAN FOREST Black Leather Mens Card Holder With Pen Combo',
        img:'./bestSeller_img/bs1.jpg',
        price:'19,990',
        offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
        order:'Get it by Tuesday, February 1',
        cap1:'FREE Delivery by',
        cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'m-1',
    name:'Apple iPhone 13 Pro (128GB) - Sierra Blue',
    img:'./mob_img/mob1.jpg',
    price:'19,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},

];

let Cart=()=>{
    return(
        
        <div>
            {
                Cart_data.map(
                    data=>(
                        <CartItem name={data.name} img={data.img} price={data.price} offer={data.offer} order={data.order} cap1={data.cap1} cap2={data.cap2} />
                    )
                )

            }
        </div>
    );

}

export default Cart;
