import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Information from './Components/Information/Information'
import axios from 'axios'

function App() {
  const[state,setState] = useState({})
  const getDataFromServer = (city) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c7380ed6c3148b63430aa57873504fd`).then((res) => {
      console.log(res.data)
      setState(res.data)
    })
  }
  return (
    <div className="App mt-5">
      <h1 className="text-dark mt-3">Weather</h1>
      <Form getDataFromServer={getDataFromServer} />
      {Object.keys(state).length===0 ? <div></div> : <Information info={state} />}
    </div>
  );
}

export default App;
