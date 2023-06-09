import React from 'react';
import { Fontisto } from "@expo/vector-icons";
import { 
  Container, 
  TopContainer,
  Region,
  City,
  BottomContainer,
  WeatherContainer,
  Dates,
  WeatherMain,
  WeatherDesc,
  WeatherTxt,
  Temp,
} from './styles';
import { weatherConditions } from '../../utils/WeatherConditions';

interface Location {
  region?: string;
  city?: string;
  district?: string;
}

interface Props {
  weather: 'Rain' | 'Clear' | 'Thunderstorm' | 'Clouds' | 'Snow' | 'Drizzle' | 'Mist' | 'Haze' | 'Off' ;
  location?: Location;
  dt: number | 0;
  humidity: number | 13;
  temp: number | 13;
  temp_min: number | 13;
  temp_max: number | 13;
}

export default function Weather({ weather, location, dt, humidity, temp, temp_min, temp_max }: Props){
  return (
    <Container color={weatherConditions[weather].color}>
          <TopContainer>
            <Region fontColor={weatherConditions[weather].fontColor}>{location?.region} </Region>
            <City fontColor={weatherConditions[weather].fontColor}>
              {location?.city} {location?.district}
            </City>
          </TopContainer>
          <BottomContainer horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} indicatorStyle="black">
            <WeatherContainer>
              <Fontisto
                name={weatherConditions[weather].icon ? weatherConditions[weather].icon : "cloudy-gusts"}
                size={150}
                color={weatherConditions[weather].fontColor}
                />
            <Dates fontColor={weatherConditions[weather].fontColor}>{new Date(dt * 1000).toString().substring(0, 10)}</Dates>
            <WeatherMain fontColor={weatherConditions[weather].fontColor}>{weatherConditions[weather].title}</WeatherMain>
            <WeatherDesc fontColor={weatherConditions[weather].fontColor}>{weatherConditions[weather].subtitle}</WeatherDesc>
            <WeatherTxt fontColor={weatherConditions[weather].fontColor}>Humidity: {humidity}%</WeatherTxt>
            <WeatherTxt fontColor={weatherConditions[weather].fontColor}>Min: {Math.ceil(temp_min)}°</WeatherTxt>
            <WeatherTxt fontColor={weatherConditions[weather].fontColor}>Max: {Math.ceil(temp_max)}°</WeatherTxt>
            <Temp fontColor={weatherConditions[weather].fontColor}>{Math.ceil(temp)}°</Temp>
            </WeatherContainer> 
          </BottomContainer>
    </Container>
  );
}