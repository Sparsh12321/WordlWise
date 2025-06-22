import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css'
import{MapContainer,TileLayer,Marker,Popup, useMap, useMapEvents} from "react-leaflet";
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeoLocation';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';
export default function Map() {
  
  const [mapPosition,setmapPosition]=useState([40,0]);
  const {cities}=useCities();
const [lat,lng]=useUrlPosition();
   const{isLoading:isLoadingPosition,position:geolocationPosition,getPosition}=useGeolocation();



  useEffect(function(){
    if(lat&&lng)setmapPosition([lat,lng])
  },[lat,lng])

  useEffect(function(){
    if(geolocationPosition)setmapPosition([geolocationPosition.lat,geolocationPosition.lng])
  },[geolocationPosition])
  return (
    <div className={styles.mapContainer} >
    {!geolocationPosition&&<Button type="position" onClick={getPosition}>{isLoadingPosition?'Loading...':"Use Your Position"}</Button>}
    <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {cities.map(city=>(<Marker position={mapPosition} key={city.id}>
      <Popup>
      <span>{city.emoji}</span> <span>{city.cityName}</span>
      </Popup>
    </Marker>))}
    <ChangeCenter position={mapPosition}/>
    <DetectClick/>
  </MapContainer>
    </div>
  );
}

function ChangeCenter({position}){
  const map=useMap();
  map.setView(position,6);
  return null;
}
function DetectClick(){
    const navigate=useNavigate();
  useMapEvents({
    click:(e)=>{console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);

 
    } })
}