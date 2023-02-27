import React from 'react'
import CardsItem from '../CardsItem'
import '../Cards.css'


function Cardsreuse({data}) {
    const cardsItems=data.map((item,index)=>(
    <CardsItem
    key={index}
    src={item.src}
    text={item.text}
    label={item.label}
    path={item.path}
    />
    ));
  return (
    <div className='cards'>
      <h1>Te apetece?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                {cardsItems}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cardsreuse;
