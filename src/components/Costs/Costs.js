import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";

const Costs = ({costs}) => {

  const [selectedYear, setSelectedYear] = useState('2020')

  const changeYearHandler = (targetYear) => {
    setSelectedYear(targetYear)
  }

  const filteredCostsByYear = (arr, year) => {
    return arr.filter(elem => elem.date.getFullYear().toString() === year)
  }



  return (
    <div>
      <Card className='costs'>
        <CostsFilter onChangeYear={changeYearHandler} year={selectedYear}/>
        <CostList costs={filteredCostsByYear(costs, selectedYear)}/>
      </Card>
    </div>
  );
};

export default Costs;