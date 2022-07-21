import Item from './item.js';

let TodayDeal_data=[
    {
        id:'td-1',
        name:'OPPO Phones at lowest price ever',
        img:'./todayDeal/td1.jpg',
        price:'19,990',
        offer:'Up to 50% of',
        order:'Get it by Tuesday, February 1',
        cap1:'FREE Delivery by',
        cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'td-2',
    name:'Grand Gaming Days: Offers on Bestselling Laptops from Asus,',
    img:'./todayDeal/td2.jpg',
    price:'30,990',
    offer:'Flat INR 5000 Off on STATE_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 4',
    cap1:'Delivery Charge Applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 8 Months for Accessories'
},
{
    id:'td-3',
    name:'Latest Launches from boAt',
    img:'./todayDeal/td3.jpg',
    price:'10,990',
    offer:'Flat INR 5000 Off on Bank Of Boroda_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 7',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty  Available for Mobile and 6 Months for Accessories'
},
{
    id:'td-4',
    name:'OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV',
    img:'./todayDeal/td4.jpg',
    price:'49,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'td-5',
    name:'Top Offers on V Guard Appliances',
    img:'./todayDeal/td5.jpg',
    price:'35,990',
    offer:'Flat INR 5000 Off on PAYTEM_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Sunday , February 20',
    cap1:'Delivery charge applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'td-6',
    name:'Deal on Home Décor Products',
    img:'./todayDeal/td6.jpg',
    price:'7,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'td-7',
    name:'Womens Ethnic Bestsellers',
    img:'./todayDeal/td7.jpg',
    price:'7,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
];

let TodayDeal=()=>{
    return(
        <div>
            {
                TodayDeal_data.map(
                    data=>(
                        <Item name={data.name} img={data.img} price={data.price} offer={data.offer} order={data.order} cap1={data.cap1} cap2={data.cap2} />
                    )
                )

            }
        </div>
    );

}

export default TodayDeal;


