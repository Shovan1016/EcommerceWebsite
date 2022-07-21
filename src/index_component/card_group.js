import CardGroupItem from './card_group_item';
let card_data=[
    {
        title:'Top picks for your home',
        id:'c-1',
        img1:'./card_group_image/ac.jpg',
        name1:"AC",
        img2:'./card_group_image/freez.jpg',
        name2:'Refrigetor',
        img3:'./card_group_image/microwave.jpg',
        name3:'Microwave',
        img4:'./card_group_image/whasing_machine.jpg',
        name4:'Washing Machine'
    },
    {
        title:'Top picks for your home',
        id:'c-1',
        img1:'./card_group_image/ac.jpg',
        name1:"AC",
        img2:'./card_group_image/freez.jpg',
        name2:'Refrigetor',
        img3:'./card_group_image/microwave.jpg',
        name3:'Microwave',
        img4:'./card_group_image/whasing_machine.jpg',
        name4:'Washing Machine'
    },  {
        title:'Top picks for your home',
        id:'c-1',
        img1:'./card_group_image/ac.jpg',
        name1:"AC",
        img2:'./card_group_image/freez.jpg',
        name2:'Refrigetor',
        img3:'./card_group_image/microwave.jpg',
        name3:'Microwave',
        img4:'./card_group_image/whasing_machine.jpg',
        name4:'Washing Machine'
    }];   
        



let CardGroup=()=>
{
    return(
        <div className='flex justify-around mt-4 '>
            {
            card_data.map(
                card => (
                    
                    <CardGroupItem title={card.title} img1={card.img1} name1={card.name1} img2={card.img2} name2={card.name2} img3={card.img3} name3={card.name3} img4={card.img4} name4={card.name4}></CardGroupItem>
                   
                )

            )
        }
        </div>
    );
}
export default CardGroup;