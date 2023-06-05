import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  tripDateString,
  destinationCitiesString,
} from '../../utils'

const TripScreen = ({ route, navigation }) => {
  const { trip } = route.params;
  // const { title, startDate, endDate, from, cities } = trip;
  // const [stateFrom, setStateFrom] = useState(from);

  return (
    <View style={styles.container}>
      <Text style={styles.tripTitle}>{trip.title}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Preferences', { trip: trip })}
        style={styles.preferencesButton}
      >
        <Text style={styles.buttonFont}>{destinationCitiesString(trip)} • {tripDateString(trip)}</Text>
      </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  tripTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  preferencesButton: {
    padding: 10,
    backgroundColor: '#F2F2F2',
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonFont: {
    fontSize: 14,
    color: '#1F1F1F',
  }
});

export default TripScreen;