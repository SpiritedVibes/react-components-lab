import './WeatherForecast.css'

const WeatherForecast = ({data}) => {
    return (

        <div className="weather">
        <h2>{data.day}</h2>
        <img src={data.img} alt={data.imgAlt} />
        <p><span>conditions:{data.conditions} </span>current weather conditions</p>
        <p><span>time: {data.time} </span>{data.time.day}</p>
      </div>
    
    )
}

export default WeatherForecast