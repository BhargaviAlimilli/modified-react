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
      low: "",
      icon:""
    }
    console.log("contructor running")
  
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems)

  }

  searchCity = (e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city);
  }

  getCityWeather = (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=166b3b85b36db1e454f6fbc2ebd2de09`
    axios.get(url).then((resp)=>{
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      })
    })    
  }

  render(){

    console.log("render is running")
    const iconUrl=`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`

  return (
    <div className="App">
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Check Weather</a>
      <form onSubmit={this.searchCity}>
      <input type='text' placeholder='Enter the city name' id='city'></input>
      </form>

    <div id="modal1" className="modal">
      <div className="modal-content">
        <h2>{this.state.cityName}</h2>
        <h5>{this.state.weather}</h5> <img src={iconUrl} />
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
