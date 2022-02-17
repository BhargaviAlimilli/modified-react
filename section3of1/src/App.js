import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {

  constructor(){
    super()

    this.state={
      temp:''
    }
    console.log("contructor running")
  
  }

  componentDidMount(){
    const url= 'https://api.openweathermap.org/data/2.5/weather?lat=16.703133&lon=81.104015&appid=166b3b85b36db1e454f6fbc2ebd2de09'

    axios.get(url).then((resp)=>{
    console.log(resp.data.main)
    console.log("did mount is running")
    this.setState({
      temp: resp.data.main.temp   
    })
    console.log(this.state.temp)   

  })


  }

  render(){

    console.log("render is running")

  return (
    <div className="App">
      <h1>Sanity check</h1>
      <h2>{this.state.temp}</h2>
      
    </div>
  );
 }
}

export default App;
