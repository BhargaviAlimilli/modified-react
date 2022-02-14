import './App.css';
// import States from './StateInAction'
// import Events from './SimpleEvents'
// import StatesEvents from './StatesAndEvents';
// import StatePractice from './StatePractice';
import CardSet from './CardSet';
import cards from './cards'

function App() {
  return (
    <div className="App">
        <div className="row">
          <CardSet cards={cards} />
        </div>
      </div>
  );
}

export default App;
