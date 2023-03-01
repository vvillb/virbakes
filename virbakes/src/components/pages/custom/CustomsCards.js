import React from 'react'
import CardsItem from '../../CardsItem'
import './CustomCards.css'
import mix from '../../../assets/imgs/surtido_brow_alf.jpg'
import tartaDdl from '../../../assets/imgs/bizcocho_marm_ddl.jpg'
import tartaAlfajor from '../../../assets/imgs/tarta_alfajor.jpg'

function CustomCards() {
    return (
      <div className='cards'>
        <h1>Pide lo que quieras!</h1>

        <div className='card__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                
                     
                  <div className='cards__item'>
                    
                    <CardsItem
                    src={mix}
                    text="Ideales para eventos y reuniones"
                    label="Surtido"
                   path="#"
                   title_above="No sabes que escoger?"
                    />
                  </div>
                
                
                  <div className='cards__item'>                 
                  <CardsItem
                  src={tartaDdl}
                  text="Mejor algo que luzca así de bonito en la mesa, no?"
                  label="Bizcocho con de dulce de leche"
                  path="#"
                  title_above="Tienes un evento especial?"
                  />
                  </div>
                
                
                  <div className='cards__item'>  
                  <CardsItem
                  src={tartaAlfajor}
                  text="Un alfajor hecho tarta...tus sueños hechos realidad 😉"
                  label="Tarta de alfajor"
                  path="#"
                  title_above="Qué te imaginas?"
                  />
                  </div>
                 
              </ul>
          </div>
        </div>
      </div>
    );
  }

  export default CustomCards;