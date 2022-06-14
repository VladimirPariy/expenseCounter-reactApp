import React from 'react';
import CostItem from "./CostItem";

const Costs = ({costs}) => {
  return (
    <div className='costs'>
      {costs.map(elem => {
        return <CostItem {...elem} key={elem.date}/>
      })}
    </div>
  );
};

export default Costs;