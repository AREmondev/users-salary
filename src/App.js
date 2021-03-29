import './App.css';
import data from './usersData.json';
import Employ from './components/Employ/Employ';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const handleAddSalary = (data) =>{
  const  newCart = [...cart,data];
  setCart(newCart);
  }
 const newData = data.slice(0,15);
  return (
    <div className="App">
     <div className='employ'>
      <h1>{console.log(data)}</h1>
        <div>
          {
            newData.map(data => <Employ handleAddSalary ={handleAddSalary} data={data}></Employ>
            )
          }
        </div>
     </div>
     <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
