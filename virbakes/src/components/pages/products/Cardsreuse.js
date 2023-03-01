import React from 'react'
import CardsItem from './CardsItems'
import '../../Cards.css'


function Cardsreuse({data, backgroundColor}) {
    const cardsItems=data.map((item,index)=>(
    <CardsItem
    key={index}
    src={item.src}
    text={item.text}
    label={item.label}
    path={item.path}
    title_above=""
    />
    ));
  return (
    <div className='cards' style={{backgroundColor}}>
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
