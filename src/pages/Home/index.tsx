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

const trips = [
  {
    title: 'A week with family in the U.S.',
    startDate: new Date(2023, 8, 20),
    endDate: new Date(2023, 8, 27),
  },
  {
    title: 'A week with family in Brazil',
    startDate: new Date(2023, 8, 20),
    endDate: new Date(2023, 11, 20),
  },
];

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.h1}>My trips</Text>
  </View>
);

const TripCard = ({ navigation, trip }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Trip')}
    style={styles.tripCard}
  >
    <View>
      <Text style={styles.tripTitle}>{trip.title}</Text>
      <Text style={styles.tripDates}>{tripDateString(trip)}</Text>
    </View>
  </TouchableOpacity>
);

const UpcomingTrips = ({ navigation }) => (
  <View style={styles.section}>
    <Text style={styles.h2}>Upcoming</Text>
    <View>
      {trips.map((trip, i) => <TripCard key={i} navigation={navigation} trip={trip}/>)}
    </View>
  </View>
);

const PastTrips = () => (
  <View style={styles.section}>
    <Text style={styles.h2}>Past</Text>
    <Text style={styles.body}>Coming soon</Text>
  </View>
);

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header/>
    <UpcomingTrips navigation={ navigation }/>
    <PastTrips/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  header: {
    
  },
  section: {
    marginTop: 40,
  },
  tripCard: {
    paddingVertical: 20,
  },
  tripTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tripDates: {
    fontSize: 16,
    marginTop: 10,
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    paddingVertical: 8,
  }
});

export default HomeScreen;