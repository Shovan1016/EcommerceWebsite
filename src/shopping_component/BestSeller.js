import Item from './item.js';

let BestSeller_data=[
    {
        id:'bs-1',
        name:'URBAN FOREST Black Leather Mens Card Holder With Pen Combo',
        BestSeller_img:'./bestSeller_img/bs1.jpg',
        price:'19,990',
        offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
        order:'Get it by Tuesday, February 1',
        cap1:'FREE Delivery by',
        cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'bs-2',
    name:'OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation',
    BestSeller_img:'./bestSeller_img/bs2.jpg',
    price:'30,990',
    offer:'Flat INR 5000 Off on STATE_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 4',
    cap1:'Delivery Charge Applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 8 Months for Accessories'
},
{
    id:'bs-3',
    name:'VT VIRTUE TRADERS Ultra Soft Unisex Woolen Beanie Cap Plus Muffler Scarf',
    BestSeller_img:'./bestSeller_img/bs3.jpg',
    price:'10,990',
    offer:'Flat INR 5000 Off on Bank Of Boroda_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 7',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty  Available for Mobile and 6 Months for Accessories'
},
{
    id:'bs-4',
    name:'Electronic Portable Fishing Hook Type Digital LED Screen Luggage Weighing Scale',
    BestSeller_img:'./bestSeller_img/bs4.jpg',
    price:'49,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'bs-5',
    name:'Classic Mosquito Net, Polyester, Foldable for Double Bed',
    BestSeller_img:'./bestSeller_img/bs5.jpg',
    price:'35,990',
    offer:'Flat INR 5000 Off on PAYTEM_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Sunday , February 20',
    cap1:'Delivery charge applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'bs-6',
    name:'Oneplus Bullets Wireless Z Bass Edition Bluetooth ',
    BestSeller_img:'./bestSeller_img/bs6.jpg',
    price:'7,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
];

let BestSeller=()=>{
    return(
        <div>
            {
                BestSeller_data.map(
                    bs=>(
                        <Item name={bs.name} img={bs.BestSeller_img} price={bs.price} offer={bs.offer} order={bs.order} cap1={bs.cap1} cap2={bs.cap2} />
                    )
                )

            }
        </div>
    );

}

export default BestSeller;


