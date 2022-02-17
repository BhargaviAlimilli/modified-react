import './App.css';
import axios from 'axios'

function App() {
  const url= 'https://api.openweathermap.org/data/2.5/weather?lat=16.703133&lon=81.104015&appid=85d1ef62e2c3e68413d1f5e67b67fffa'

  axios.get(url).then((resp)=>{
    console.log(resp.data)
  })


  return (
    <div className="App">
      <h1>Sanity check</h1>
      
    </div>
  );
}

export default App;
