

const Current = (props) => {
    return (
        <div className="current">
            <div className="current__date">
                <h3>{props.currentdate.date}</h3>
            </div>
            <div className="sky">
                <h4>{props.currentdate.description}</h4>
            </div>
            <div className="icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 -5 35 40" className="svg-0-2-26 svg-d1-0-2-28"><title>clear sky</title><path d={props.currentdate.icon}></path></svg>
            </div>
            <div className="current_temp">
                <h3>{props.currentdate.temperature.current} C</h3>
            </div>
            <div className="wind">
                <p>Wind: {props.currentdate.wind} km/h</p>
            </div>
            <div className="humidity">
                <p>Humidity: {props.currentdate.humidity}%</p>
            </div>
        </div>
    )

}

export default Current;