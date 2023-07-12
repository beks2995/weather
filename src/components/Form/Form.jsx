import React from 'react'
import axios from 'axios'

const Form = ({cityName, setCityName, setWeather, setError}) => {
    const getWeatherData = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8e53dce2beb14965ac4550382ee7c32a&units=metric`)
            .then(({ data }) => {
                setWeather(data)
                setCityName('')
                setError(false)
            })
            .catch(() => {
                setWeather(null)
                setError(true)
            })

    }
    const inputHandler = (e) => {
        setCityName(e.target.value)
    }
    return (
        <form onSubmit={getWeatherData}>
            <input type="text"
                placeholder='Введите город'
                value={cityName}
                onChange={inputHandler}
            />
            <button type='submit'>Найти</button>
        </form>
    )
}

export default Form