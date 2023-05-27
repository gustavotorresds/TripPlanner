import React from 'react';
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
  tripDateString
} from '../../utils'

const trip = {
    title: 'A week with family in the U.S.',
    startDate: new Date(2023, 8, 20),
    endDate: new Date(2023, 8, 27),
    cities: ['Miami', 'SF']
};

const TripScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.tripTitle}>{trip.title}</Text>

    <TouchableOpacity
      onPress={() => navigation.navigate('Preferences')}
      style={styles.preferencesButton}
    >
      <Text style={styles.buttonFont}>{trip.cities.join(', ')} • {tripDateString(trip)}</Text>
    </TouchableOpacity>
  </View>
);

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