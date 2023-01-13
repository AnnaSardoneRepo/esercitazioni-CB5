
import './App.css';
import { useState } from 'react';
import {BloodTypes} from './components/BloodTypes';
import {Beers} from './components/Beers';
import { Users } from './components/Users';

function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select defaultValue={''} onChange={selectChangeHandler}>
        <option disabled value="">Select an item</option>
        <option value='bloodTypes'>Random blood type</option>
        <option value='beers'>Random beer</option>
        <option value='users'>Random user</option>
      </select>
    </form>
  )
}

function DefaultComponent () {
  return <div className='default_comp'>No item selected</div>
}

const componentMap = {
 
  bloodTypes: BloodTypes,
  beers: Beers,
  users: Users,
  default: DefaultComponent
}


function App() {

  const [componentToRender, setComponentToRender] = useState('default');

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
<h1>Select an item from the menu</h1>
      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />

    </div>
  );
}

export default App;
