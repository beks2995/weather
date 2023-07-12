import {useState} from 'react'

import Form from '../Form'
import Weather from '../Weather'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [cityName, setCityName] = useState('')
  const [err, setError] = useState(false)
  
  

  return (
    <div className='container'>
       <Form 
       cityName={cityName} 
       setCityName={setCityName} 
       setWeather={setWeather} 
       setError={setError}
       />
       {
        weather &&
        <Weather weather={weather}/>
       }
       {
        err && 
        <div>
          Error!!!!
        </div>
       }
    </div>
  )
}

export default App