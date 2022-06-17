import './NewCost.css'
import CostForm from "./CostForm";
import React, {useState} from "react";


const NewCost = (props) => {
  const [isVisibility, setIsVisibility] = useState(false)

  const saveCostDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData, id: Math.random().toString()
    }
    props.onAddCost(costData)
  }

  const openCostForm = <button onClick={() => setIsVisibility(true)}> Добавить новый расход</button>

  return (
    <div className='new-cost'>
      {
        isVisibility ? <CostForm onSaveCostData={saveCostDataHandler} setVisibility={setIsVisibility}/> : openCostForm
      }
    </div>
  );
};

export default NewCost;