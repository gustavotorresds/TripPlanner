import { React, useContext } from 'react';
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

import { TripsContext } from '../../context/TripsContext';
import { tripDateString } from '../../utils';


const Header = () => (
  <View style={styles.header}>
    <Text style={styles.h1}>My trips</Text>
  </View>
);

const TripCard = ({ navigation, trip }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Trip', { trip: trip})}
    style={styles.tripCard}
  >
    <View>
      <Text style={styles.tripTitle}>{trip.title}</Text>
      <Text style={styles.tripDates}>{tripDateString(trip)}</Text>
    </View>
  </TouchableOpacity>
);

const UpcomingTrips = ({ navigation, trips }) => (
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

const HomeScreen = ({ navigation }) => {
  const { trips, setTrips } = useContext(TripsContext);

  return (
    <View style={styles.container}>
      <Header/>
      <UpcomingTrips navigation={ navigation } trips={ trips } />
      <PastTrips/>
    </View>
  );
};

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