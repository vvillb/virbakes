import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css'
import brownie from '../assets/imgs/brownie.jpg';
import alfajores2 from '../assets/imgs/alfajores2.jpg';
import carrot_cake_fit from '../assets/imgs/carrot_cake_fit.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Te apetece?</h1>
      <div className='card__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardsItem
                src={brownie}
                text="Bien cargados de sabor (y de chocolate...😏)"
                label="Brownies"
                path="/Products"
                />
                <CardsItem
                src={alfajores2}
                text="Rellenos de dulce de leche y bañados en chocolate"
                label="Alfajores"
                path="/Products"
                />
                <CardsItem
                src={carrot_cake_fit}
                text="Este bizcocho está tan rico que no vas a creer que es #healthy"
                label="Healthy Carrot Cake"
                path="/Products"
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
