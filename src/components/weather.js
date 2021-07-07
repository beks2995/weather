import React from 'react';

const Weather = ({weather}) => {
    const time = (timestamp) => {
        const time = timestamp * 1000
        const date = new Date(time)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${hours} : ${minutes}`
    }
    const month = (timestamp) => {
        const time = timestamp * 1000
        const date = new Date(time)
        const month = date.getMonth() + 1
        switch (month) {
            case 1:
                return 'january';
                break;
            case 2:
                return 'february';
                break;
            case 3:
                return 'march';
                break;
            case 4:
                return 'april';
                break;
            case 5:
                return 'may';
                break;
            case 6:
                return 'june';
                break;
            case 7:
                return 'july';
                break;
            case 8:
                return 'august';
                break;
            case 9:
                return 'september';
                break;
            case 10:
                return 'november';
                break;
            case 11:
                return 'october';
                break;
            case 12:
                return 'december';
                break;
            default:
                return 'no month'
        }
    }
    return (
        <div>
            <p>{time(weather.dt)} {month(weather.dt)}</p>
            <p>Город: {weather.name}</p>
            <p><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/> {(weather.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Закат: {time(weather.sys.sunset)}</p>
            <p>Рассвет: {time(weather.sys.sunrise)}</p>
            <p>Влажность: {weather.main.humidity} %</p>
            <p>Скорость ветра:</p>
        </div>
    );
};

export default Weather;