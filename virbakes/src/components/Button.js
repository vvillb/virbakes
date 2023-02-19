import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES=['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large'];

export const Button=({children, type, onClick, buttonStyle, buttonSize})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle)
    ?buttonStyle
    :STYLES[0];

    const checkButtonSize=SIZES.includes(buttonSize)
    ?buttonSize
    :SIZES[0];

    return(
       <Link to='/Contact' className='btn-mobile'>
        <button
        className={`btn${checkButtonSize}${checkButtonStyle}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
       </Link>
    )
};
//the children are passed to the btn so that when we insert the element
//whatever is within that element is what will be rendered
// such as <button>CHILDREN</button>