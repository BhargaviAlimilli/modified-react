import './App.css';
import Weather from './components/weather';
import WarmOrNotrm  from './components/warmOrNot'

function App() {
  return (
    <div className="App">
      <h1>sanity check</h1>
      <Weather />
      <WarmOrNotrm />
    </div>
  );
}

export default App;
