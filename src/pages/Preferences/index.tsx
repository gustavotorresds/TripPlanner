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

const PreferencesScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Where from?</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>When?</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Who?</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 40,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: '90%',
    borderColor: '#474747',
    padding: 20,
    borderWidth: 0.1,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default PreferencesScreen;