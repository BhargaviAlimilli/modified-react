import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {

  constructor(){
    super()
  
  const url= 'https://api.openweathermap.org/data/2.5/weather?lat=16.703133&lon=81.104015&appid=166b3b85b36db1e454f6fbc2ebd2de09'

  axios.get(url).then((resp)=>{
    console.log(resp.data)
  })
  }

  render(){

  return (
    <div className="App">
      <h1>Sanity check</h1>
      
    </div>
  );
 }
}

export default App;
