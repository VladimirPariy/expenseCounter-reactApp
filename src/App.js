import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
      id:'c1',
      date: new Date(2022, 0, 13),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      id:'c2',
      date: new Date(2022, 1, 26),
      description: 'Ноутбук',
      amount: 879.99,
    },
    {
      id:'c3',
      date: new Date(2022, 3, 9),
      description: 'Носки',
      amount: 0.99,
    },
  ]

const addCostHandler = (cost) => {
  console.log(cost)
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
