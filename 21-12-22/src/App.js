import './App.css';
import { Button } from './components/Button/Button';
import { Text } from './components/text/text';

function App() {

const propsButton1 = {
  label:"Primary",
  title:"PrimaryTitle"
}

const propsButton2 = {
  label:"Secondary",
  title:"SecondaryTitle"
}

const propsButton3 = {
  label:"Disabled",
  title:"DisabledTitle"
}
  return (
    <div className="App">
      <Text variant="title">Second Exercise</Text>
      <Text  variant="body">Aggiungere 2/3 diversi bottoni in `App.js` e per ognuno al click mostrare qualcosa di diverso in `console`;
      </Text>
      <span>
            {/* {Button (propsButton1)} */}
            <Button onClick={() => console.log('Primary')} variant="primary" {...propsButton1} >Primary</Button>
            <Button onClick={() => console.log('Secondary')} variant="secondary"{...propsButton2} >Secondary</Button>
            {/* <Button label={propsButton2.label} title={propsButton2.title} /> */}
            <Button onClick={() => console.log('Disabled')} variant="disabled" {...propsButton3} >Disabled</Button> {/* prendo tutte le proprietà con lo spread ... */}
            <Button ></Button>
            </span>

    </div>
  );
}

export default App;
