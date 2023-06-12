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
  TextInput,
  FlatList,
} from 'react-native';

import {
  tripDateString,
  destinationCitiesString,
  numberOfPeopleString,
  cityFromString,
} from '../../utils';


const cityOptions = ['Barcelona', 'Miami', 'Lisbon', 'Rome', 'Rio de Janeiro'];

const CityOption = ({ city }) => {
  return (
    <TouchableOpacity style={styles.cityOption}>
      <Text>{city}</Text>
    </TouchableOpacity>
  );
}

const PreferencesScreen = ({ route, navigation }) => {
  const { trip } = route.params;

  const [activeField, setActiveField] = useState(undefined);
  const [isFocused, setIsFocused] = useState(false);
  const [tempTrip, setTempTrip] = useState(trip);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setActiveField('from');
        }}
        style={styles.card}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Where from?</Text>
          <Text style={styles.cardDescription}>{cityFromString(tempTrip)}</Text>
        </View>
        {activeField == 'from' ?
          <>
            <TextInput
              style={styles.cityInput}
              value={tempTrip.cityFrom}
              onFocus={() => setIsFocused(true)}
              onChangeText={(newText) => setTempTrip({...tempTrip, cityFrom: newText})}
            />
            <FlatList
              data={cityOptions.filter(c => c.startsWith(tempTrip.cityFrom))}
              renderItem={({ item }) => <CityOption city={item} />}
            />
          </>
          :
          undefined
        }
      </TouchableOpacity>

      {activeField === 'from' && isFocused ?
      null :
      <>
        <TouchableOpacity
          onPress={() => setActiveField('destinations') }
          style={styles.card}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Where to?</Text>
            <Text style={styles.cardDescription}>{destinationCitiesString(tempTrip)}</Text>
          </View>

          {activeField == 'destinations' ?
            <View>
              {tempTrip.destinationCities.map((dC, idx) =>
                <TextInput
                  style={styles.cityInput}
                  value={dC.city}
                  onChangeText={(newText) => setTempTrip({
                    ...tempTrip,
                    destinationCities: [
                      ...tempTrip.destinationCities.slice(0, idx),
                      { ...tempTrip.destinationCities[idx], city: newText },
                      ...tempTrip.destinationCities.slice(idx + 1),
                    ]
                  })}
                  key={`dC-${idx}`}
                />
              )}
              <TextInput
                style={styles.cityInput}
                placeholder="Add destination"
                value=""
                onChangeText={(newText) => setTempTrip({
                  ...tempTrip,
                  destinationCities: [
                    ...tempTrip.destinationCities,
                    { city: newText, numberOfDays: 0 }
                  ]
                })}
              />
              </View>
            :
            undefined
          }
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>When?</Text>
            <Text style={styles.cardDescription}>{tripDateString(tempTrip)}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Who?</Text>
            <Text style={styles.cardDescription}>{numberOfPeopleString(tempTrip)}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Time in each destination?</Text>
          </View>
        </View>
      </>
      }
    </View>
  );
};

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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDescription: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
  },
  cityInput: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 10,
    borderColor: '#474747',
    borderWidth: 1,
    fontSize: 14,
  },
  cityOption: {
    backgroundColor: 'red',
  }
});

export default PreferencesScreen;