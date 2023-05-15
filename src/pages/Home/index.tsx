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

const HomeScreen = ({ navigation }) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home</Text>
    <Button
      title="Go to Trip"
      onPress={() => navigation.navigate('Trip')}
    />
  </View>
);

export default HomeScreen;