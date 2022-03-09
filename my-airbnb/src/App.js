import './App.css';
import Home from './pages/Home/Home'
import NavBar from './utility/NavBar/NavBar'
import {BrowserRouter as Router,Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/' component={Home} />
    </div>
    </Router>
  );
}

export default App;
