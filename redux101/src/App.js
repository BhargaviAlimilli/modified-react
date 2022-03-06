import React from 'react';
import './App.css';
import Frozen from './components/FrozenDept';
import Produce from './components/ProduceDept'
import Meat from './components/MeatProduceDept'
import main from './components/main';
import Nav from './components/NavBar';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Route path="/" component={Nav} />
        <Route path="/main" component={main} />
        <Route path="/frozen-dept" component={Frozen} />
        <Route path="/meat-dept" component={Meat} />
        <Route path="/produce-dept" component={Produce} />
      </div>
    </Router>
  );
}

export default App;



