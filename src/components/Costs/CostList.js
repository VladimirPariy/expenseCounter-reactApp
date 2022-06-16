import React from 'react';
import CostItem from "./CostItem";

const CostList = (props) => {

  if(props.costs.length===0){
    return <h2 className='cost-list__fallback'>
      В этом году рассходов нет
    </h2>
  }

  return <ul className='cost-list'>
    {props.costs.map(elem =>
      <CostItem {...elem} key={elem.date}/>
    )}
  </ul>
};

export default CostList;