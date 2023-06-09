import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "./src/utils/WeatherAPIKey";
import Weather from "./src/components/Weather";

interface Location {
  region: string;
  city: string;
  district: string;
}

interface WeatherInfo {
  dt: number;
  humidity: number;
  temp: number;
  temp_min: number;
  temp_max: number;
}

export default function App() {
  
  const [location, setLocation] = useState<Location>();
  const [weather, setWeather] = useState('Off');
  const [error, setError] = useState('');
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
    dt: 0,
    humidity: 13,
    temp: 13,
    temp_min: 13,
    temp_max: 13,
  });

  const handleGetWeather = async () => {
    setError('');
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return setError("Permission to access location was denied.");
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location: Location[] | any = [];
      const response = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
      setLocation({
        region: !response[0].region ? 'England' : response[0].region,
        city: !response[0].city ? 'Reading' : response[0].city,
        district: !response[0].district ? 'Reading' : response[0].district,
      });

      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      const json = await data.json();


      if(!json.id) {
        setError("Bad network error :( ");
        setWeather('Off');

      } else {
        setWeather(json.weather[0].main);
        setWeatherInfo({
          dt: json.dt,
          humidity: json.main.humidity,
          temp: json.main.temp,
          temp_min: json.main.temp_min,
          temp_max: json.main.temp_max,
        });
      }
      
    }
  };

  useEffect(() => {
    handleGetWeather();
  }, []);

  return (
      <Weather weather={weather} location={location} dt={weatherInfo.dt} humidity={weatherInfo.humidity} temp={weatherInfo.temp} temp_min={weatherInfo.temp_min} temp_max={weatherInfo.temp_max} />

  );
}
