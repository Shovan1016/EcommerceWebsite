import Item from './item.js';

let Mobile_data=[
    {
        id:'m-1',
        name:'Apple iPhone 13 Pro (128GB) - Sierra Blue',
        mob_img:'./mob_img/mob1.jpg',
        mob_price:'19,990',
        offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
        order:'Get it by Tuesday, February 1',
        cap1:'FREE Delivery by',
        cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'m-2',
    name:'OnePlus 9R 5G (Lake Blue, 8GB RAM)',
    mob_img:'./mob_img/mob2.jpg',
    mob_price:'30,990',
    offer:'Flat INR 5000 Off on STATE_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 4',
    cap1:'Delivery Charge Applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 8 Months for Accessories'
},
{
    id:'m-3',
    name:'Realme 8 5G (Lake Blue, 8GB RAM)',
    mob_img:'./mob_img/mob3.jpg',
    mob_price:'10,990',
    offer:'Flat INR 5000 Off on Bank Of Boroda_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 7',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty  Available for Mobile and 6 Months for Accessories'
},
{
    id:'m-4',
    name:'Redmi 10 Prime 5G (Lake Blue, 8GB RAM)',
    mob_img:'./mob_img/mob4.jpg',
    mob_price:'49,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'m-5',
    name:'POCO M2 Pro 5G (Lake Blue, 8GB RAM)',
    mob_img:'./mob_img/mob5.jpg',
    mob_price:'35,990',
    offer:'Flat INR 5000 Off on PAYTEM_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Sunday , February 20',
    cap1:'Delivery charge applicable',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
{
    id:'m-6',
    name:'IQOO Z5 5G (Lake Blue, 8GB RAM)',
    mob_img:'./mob_img/mob6.jpg',
    mob_price:'7,990',
    offer:'Flat INR 5000 Off on ICICI_Credit_WithoutFlat INR 5000 Off on ICICI_Credit Card',
    order:'Get it by Tuesday, February 1',
    cap1:'FREE Delivery by',
    cap2:'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'
},
];

let Mobile=()=>{
    return(
        <div>
            {
                Mobile_data.map(
                    mob=>(
                        <Item name={mob.name} img={mob.mob_img} price={mob.mob_price} offer={mob.offer} order={mob.order} cap1={mob.cap1} cap2={mob.cap2} />
                    )
                )

            }
        </div>
    );

}

export default Mobile;