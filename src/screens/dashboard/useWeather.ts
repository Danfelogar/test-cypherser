import { useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";
import Geolocation from 'react-native-geolocation-service';

import { weatherService } from "../../services/weatherService";
import { WeatherData } from '../../types/weather';
import { isIOS } from "../../utils";

export const useWeather = () => {

  const [location, setLocation] = useState<{ latitude: number | null, longitude: number | null }>({ latitude: null, longitude: null });
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const { latitude, longitude } = location;
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (!isIOS()) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          // console.log('Location permission denied');
          return;
        }
      }
      getCurrentLocation();
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    // if(latitude && longitude){
      getWeatherService()
    // }

  }, [])

  const getWeatherService = async () => {
    const response =  await weatherService.get(`/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m`)
    setWeather(response.data)
  }

  return {
    latitude,
    longitude,
    weather
  }
}
