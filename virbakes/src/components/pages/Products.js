import React from 'react';
import '../../App.css';
import alfajores from '../../assets/imgs/alfajores.jpg';
import '../../index.css';
import Cardsreuse from './Cardsreuse';


function Products(){
const productos=[
  {id:1,
  label: 'Alfajores',
  path:'#',
  price:'15,50',
  src: alfajores,
  imageAlt: 'Alfajores',
  text:'Rellenos de dulce de leche y cubiertos con chocolate',
}
];



return(
    <div className='productos'>
      <h1>Productos</h1>
      <Cardsreuse data={productos}/>
    </div>
 ) };


  export default Products;
  


