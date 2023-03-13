import React from 'react';

const PizzaItem = ({name,price,image}) => {
  return (
    <div className='pizza-item'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h3>{name}</h3>
        <p>{price}Ft</p>
        <button>Megrendelem</button>
    </div>
  )
}

export default PizzaItem;
