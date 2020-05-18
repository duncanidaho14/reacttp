import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routee from './router/Router'
import Horloge from './components/Horloge'
import Slider from './components/Slider';
import Counter from './components/Counter';
import TaskApp from './components/TaskApp';
import SuperbeApp from './components/SuperbeApp';
import Form from './components/Form';
const jsondata = "https://raw.githubusercontent.com/playoutprod/2020-3wa-react01/master/01_FORMULAIRES_LIFTINGUP/exercices/slider/data.json"


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routee />
        <Counter />
        <TaskApp />

        <SuperbeApp />

        <Form />

        <Horloge step={1} time={500} />
        <Horloge step={2} time={500} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <section>
        <Slider url={jsondata} />

      </section>
    </div>
  );
}

export default App;
