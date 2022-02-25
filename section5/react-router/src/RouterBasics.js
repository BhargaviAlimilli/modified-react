import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1> hello </h1>
      <Link to='/home'> home </Link>
      <Link to='/about'> about</Link>
      <Link to='/contactus'> contactus</Link>

      
      <Route exact path='/home'> Home </Route>
      <Route path='/about'> About</Route>
      <Route path='/contactus'>Contact</Route>
    </div>
    </Router>
  );
} 

export default App;
