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
} from 'react-native';

const TripScreen = ({ navigation }) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Trip</Text>
    <Button
      title="Go to Preferences"
      onPress={() => navigation.navigate('Preferences')}
    />
  </View>
);

export default TripScreen;