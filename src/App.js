import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
      date: new Date(2022, 0, 13),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2022, 1, 26),
      description: 'Ноутбук',
      amount: 879.99,
    },
    {
      date: new Date(2022, 3, 9),
      description: 'Носки',
      amount: 0.99,
    },
  ]

  return (
    <div>
      <NewCost/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
