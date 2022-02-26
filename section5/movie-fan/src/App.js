import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Home />
      </div>
    </Router>
  )
}

export default App;
