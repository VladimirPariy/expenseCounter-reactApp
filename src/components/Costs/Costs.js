import CostItem from "./CostItem";
import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, {useState} from "react";

const Costs = ({costs}) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const changeYearHandler=(targetYear)=> {
    setSelectedYear(targetYear)
  }

  return (
    <div>
      <Card className='costs'>
        <CostsFilter onChangeYear={changeYearHandler} year={selectedYear}/>
        {costs.map(elem => {
          return <CostItem {...elem} key={elem.date}/>
        })}
      </Card>
    </div>
  );
};

export default Costs;