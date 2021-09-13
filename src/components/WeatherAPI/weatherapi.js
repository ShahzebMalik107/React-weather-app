import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Container from '../UI/container/container'
import '../UI/CSS/main.css'





const Weather = (props) => {
    console.log(props.lat)

    const { data, isloading, errorMessage } = useOpenWeather({
        key: '43bb4d2716540190dd91298bd5824e56',
        lat: props.lat,
        lon: props.lng,
        lang: 'en',
        unit: 'metric',
    });
    return (
        <Container className="weather_top">
            <div className="main__weather">
                <ReactWeather isloading={isloading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel={props.citylabel}
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast />

            </div>
        </Container>

    );

}

export default Weather;