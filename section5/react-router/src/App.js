import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NavBar from './NavBar/NavBar'

const Home=()=> <h1>Home</h1>
const Host=()=> <h1>Host</h1>
const Help=()=> <h1>Help</h1>
const SignUp=()=> <h1>SignUp</h1>
const SignIn=()=> <h1>SignIn</h1>



function App() {
  return (
    <Router>
      <NavBar />,
      <Route exact path='/' component={Home} />
      <Route exact path='/host' component={Host} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />

    </Router>
  );

} 

export default App;
  