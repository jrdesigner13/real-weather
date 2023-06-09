import styled from 'styled-components/native';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface ContainerProps {
  color: string;
}

interface FontProps {
  fontColor: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ color }) => color};
`;

export const TopContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Region = styled.Text<FontProps>`
  font-size: 25px;
  font-weight: bold;
  color: ${({ fontColor }) => fontColor};
`;

export const City = styled.Text<FontProps>`
  font-size: 25px;
  font-weight: bold;
  color: ${({ fontColor }) => fontColor};
  margin-top: 7px;
`;

export const BottomContainer = styled.ScrollView`
  flex: 3;
`;

export const WeatherContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width}px;
`;

export const Dates = styled.Text<FontProps>`
  font-size: 30px;
  color: ${({ fontColor }) => fontColor};
  margin-top: 20px;
`;

export const WeatherMain = styled.Text<FontProps>`
  font-size: 50px;
  color: ${({ fontColor }) => fontColor};
  margin-top: 10px;
  margin-bottom: 2px;
`;

export const WeatherDesc = styled.Text<FontProps>`
  font-size: 30px;
  color: ${({ fontColor }) => fontColor};
`;

export const WeatherTxt = styled.Text<FontProps>`
  font-size: 20px;
  color: ${({ fontColor }) => fontColor};
  margin-top: 5px;
`;

export const Temp = styled.Text<FontProps>`
  font-size: 75px;
  color: ${({ fontColor }) => fontColor};
  margin-top: 20px;
`;