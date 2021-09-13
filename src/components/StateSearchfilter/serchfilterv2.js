import Data from '../AllCiity/allcity.json'
import Container from '../UI/container/container';
import '../UI/CSS/main.css'
import React, { useState } from 'react'


const Searchv2 = (props) => {

    const [lng, setlng] = useState('');
    const [lat, setlat] = useState('');
    const [maincity, setmaincity] = useState('');

    const onsubmithadler = (event) => {
        event.preventDefault();
        props.OnSearch(maincity,lng, lat);  

    }

    const onclickhandler = () => {
        let city = document.getElementById('city');
        let city_db = document.getElementById('citys');
        const getSelecteOptionLocation = () => {
            for (let i = 0; i < city_db.options.length; i++) {
                if (city_db.options[i].value === city.value) {
                    setlng(city_db.options[i].getAttribute('lng'));
                    setlat(city_db.options[i].getAttribute('lat'));
                    setmaincity(city_db.options[i].value);
                    break;
                }
            }
        }
        getSelecteOptionLocation();
        
        // console.log(lng + "  " + lat + "  " + maincity);
    }


    return (
        <Container>
            <div className="Search_filter">
                <form onSubmit={onsubmithadler} >
                    <label for="city">Choose your City from the list:</label>
                    <input list="citys" name="browser" id="city" />
                    <datalist id="citys">
                        {Data.map((val, key) => {
                            return (
                                <option key={key} value={val.city + ',' + val.iso2} lat={val.lat} lng={val.lng} />
                            )
                        })}
                    </datalist>
                    <input type="submit" id="submit" value="Search" onClick={onclickhandler} />
                </form>
            </div>
        </Container>
    );
}

export default Searchv2;