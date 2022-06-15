import './CostForm.css'
import React, {useState} from "react";

const CostForm = (props) => {

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const costData = {
      name, amount, date:new Date(date)
    }
    props.onSaveCostData(costData)
    setName('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type="text" value={name} onChange={nameChangeHandler}/>
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={amount}/>
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={date}/>
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
        </div>
      </div>

    </form>
  );
};

export default CostForm;