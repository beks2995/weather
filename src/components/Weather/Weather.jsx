import React from 'react'

const Weather = ({weather}) => {
    const getTime = (timeStamp) => {
        const time = new Date(timeStamp * 1000)
        const hours = time.getHours()
        const minutes = time.getMinutes()
        return `${hours} : ${minutes}`
     }
    return (
        <div>
            <p>Город: {weather.name}</p>
            <p>Температура: <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" /> {weather.main.temp}</p>
            <p>Рассвет: {getTime(weather.sys.sunrise)}</p>
            <p>Закат: {getTime(weather.sys.sunset)}</p>
        </div>
    )
}

export default Weather