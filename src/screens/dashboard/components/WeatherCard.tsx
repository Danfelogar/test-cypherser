
import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Path } from 'react-native-svg';

import { useWeather } from "../useWeather"


// const Icon = ({ name, color, size }) => {
//   const icons = {
//     mapPin: <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
//     clock: <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 8V7a1 1 0 1 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586z" />,
//     thermometer: <Path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z M12 15a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />,
//     wind: <Path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />,
//   };

//   return (
//     <Svg height={size} width={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       {icons[name]}
//     </Svg>
//   );
// };

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const WeatherCard = () => {
  const { weather: weatherData } = useWeather()
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <View>
          <View style={styles.locationContainer}>
            {/* <Icon name="mapPin" color="#fff" size={20} /> */}
            <Text style={styles.locationText}>
              {weatherData?.latitude.toFixed(2)}°, {weatherData?.longitude.toFixed(2)}°
            </Text>
          </View>
          <View style={styles.dateContainer}>
            {/* <Icon name="clock" color="#fff" size={16} /> */}
            <Text style={styles.dateText}>{weatherData?.current?.time ? formatDate(weatherData.current.time) : 'N/A'}</Text>
          </View>
        </View>
        <Text style={styles.temperature}>
          {weatherData?.current.temperature_2m.toFixed(1)}°C
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            {/* <Icon name="thermometer" color="#f56565" size={20} /> */}
            <Text style={styles.infoText}>
            temperature: {weatherData?.current.temperature_2m.toFixed(1)}°C
            </Text>
          </View>
          <View style={styles.infoItem}>
            {/* <Icon name="wind" color="#4299e1" size={20} /> */}
            <Text style={styles.infoText}>
              Wind speed: {weatherData?.current.wind_speed_10m.toFixed(1)} km/h
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 'auto',
  },
  topSection: {
    padding: 24,
    backgroundColor: '#3b82f6',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 4,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  bottomSection: {
    padding: 24,
    backgroundColor: '#fff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 8,
    color: '#4a5568',
  },
});