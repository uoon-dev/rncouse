import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceImage from "./src/assets/kurapika_compatriots.jpg";

export default class App extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: PlaceImage
        })
      }
    })
  };

  placeDeletedHandlder = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== index)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}></PlaceInput>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandlder}></PlaceList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
