import Header from './components/Header/header';
import Topbanner from './components/TopBanner/Topbanner';
import Weather from './components/WeatherAPI/weatherapi'
import React, { useState } from 'react';
import Searchv2 from './components/StateSearchfilter/serchfilterv2';
import Footer from './components/footer/footer';


function App() {
  const [quierdCity, setquierdCity] = useState('')
  const [quiredlng,setquiredlng]=useState('')
  const [quiredlat,setquiredlat] = useState('')

  const onSearchHandler = (search_city, lng,lat) => {
    setquierdCity(search_city)
    setquiredlng(lng)
    setquiredlat(lat);
  }

  return (
    <div className="App">
      <Header/>
      <Topbanner />
      <Searchv2 OnSearch={onSearchHandler} />
      <Weather citylabel={quierdCity} lng={quiredlng} lat={quiredlat}/>
      <Footer/>
    </div>
  );
}

export default App;
