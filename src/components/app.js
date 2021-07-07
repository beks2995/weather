import React, {useState} from 'react';
import Form from "./form";
import Weather from "./weather";
import './app.css'

const App = () => {
    const [weather, setWeather] = useState({err: false});
    const [city, setCity] = useState('');
    return (
        <div className='block'>
         <Form setCity={setCity} setWeather={setWeather} city={city} weather={weather}/>
         { weather.err ? <div>ОЙ что-то не так</div> : Object.keys(weather).length !== 1 ?<Weather weather={weather}/> : <div>Введите город в поле выше и узнайте погоду</div> }
        </div>
    );
};

export default App;