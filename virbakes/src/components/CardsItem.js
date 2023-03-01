import { Link } from 'react-router-dom';
import React from 'react'
 

function CardsItem(props) {
  return (
    <>
      <li className='cards__item'>
        <h4 className='sobre__foto'>{props.title_above}</h4>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt='product'
                className='cards__item__img'/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>

      </li>
    </>
  );
}

export default CardsItem;
