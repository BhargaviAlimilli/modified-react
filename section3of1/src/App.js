import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {

  constructor(){
    super()

    this.state={
      temp:'',
      cityName: "",
      weather: "",
      high: "",
      low: ""
    }
    console.log("contructor running")
  
  }

  componentDidMount(){
    const url= 'https://api.openweathermap.org/data/2.5/weather?lat=16.703133&lon=81.104015&appid=166b3b85b36db1e454f6fbc2ebd2de09'

    axios.get(url).then((resp)=>{
    console.log(resp.data)
    console.log("did mount is running")
    this.setState({
      temp: resp.data.main.temp,
      high: resp.data.main.temp_max,
      low: resp.data.main.temp_min,
      weather: resp.data.weather[0].description,
      // icon: resp.data.weather[0].icon,
      cityName: resp.data.name  
    })
    })

    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);


  }

  render(){

    console.log("render is running")

  return (
    <div className="App">
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Check Weather</a>

    <div id="modal1" className="modal">
      <div className="modal-content">
        <h2>{this.state.cityName}</h2>
        <h5>{this.state.weather}</h5>
        <p>max temp-{this.state.high}, min temp-{this.state.low}</p>
      </div>
  <div className="modal-footer">
    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
  </div>
  </div>
      <h6>General temperature-{this.state.temp}</h6>
      
    </div>
  );
 }
}

export default App;
