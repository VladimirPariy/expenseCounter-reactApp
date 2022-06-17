import './CostItem.css'
import CostDate from "../costDate/CostDate";
import Card from "../../UI/Card";
import "../costList/CostList.css"
const CostItem = (props) => {

  return (
    <li>
      <Card className='cost-item'>
        <CostDate {...props}/>
        <div className='cost-item__description'>
          <h2>{props.description}</h2>
          <div className='cost-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;