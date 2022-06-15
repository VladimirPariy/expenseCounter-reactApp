import CostItem from "./CostItem";
import './Costs.css'
import Card from "../UI/Card";

const Costs = ({costs}) => {

  return (
    <Card className='costs'>
      {costs.map(elem => {
        return <CostItem {...elem} key={elem.date}/>
      })}
    </Card>
  );
};

export default Costs;