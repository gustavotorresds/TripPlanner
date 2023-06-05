/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, React } from 'react';
import { TripsContext } from './context/TripsContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './pages/Home'
import TripScreen from './pages/Trip'
import PreferencesScreen from './pages/Preferences'

const Stack = createNativeStackNavigator();

const App = () => {
  const [trips, setTrips] = useState([
    {
      title: 'A week with family in the U.S.',
      startDate: '2023-08-20',
      endDate: '2023-08-27',
      cities: ['Miami', 'San Francisco'],
    },
    {
      title: 'A week with family in Brazil',
      startDate: '2023-08-20',
      endDate: '2023-11-20',
      cities: ['São Paulo', 'Rio de Janeiro'],
    },
  ]);

  return (
    <TripsContext.Provider value={{ trips, setTrips }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Trip"
              component={TripScreen}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="Preferences"
              component={PreferencesScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </TripsContext.Provider>
  );
}

export default App;
