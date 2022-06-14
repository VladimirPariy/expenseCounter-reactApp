import React from 'react';
import './CostItem.css'
import CostDate from "./CostDate";

const CostItem = (props) => {

  return (
    <div className='cost-item'>
      <CostDate {...props}/>
      <div className='cost-item__description'>
        <h2>{props.description}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>

    </div>
  );
};

export default CostItem;