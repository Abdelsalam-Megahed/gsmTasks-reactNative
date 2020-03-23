import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {fetchTasks} from '../api/api';
import NavigationButtons  from './NavigationButtons';
import Constants from 'expo-constants';


export default class MapComponent extends React.Component{
    state = {
      tasks: []
    };
  
    componentDidMount() {
      this.getAllTasks();
    }
  
    componentDidUpdate() {
      setTimeout(() => {
        fetchTasks();
      }, 5000);
    }
  
    async getAllTasks() {
      const results = await  fetchTasks()
      .then(results => results.map(result => result.address.location.coordinates))
      .catch(err => console.log(err));
      this.setState({tasks: results});
    }
  
    render(){
      const {tasks} = this.state;
  
      return (
            <View style={styles.container}>
            <MapView 
                      ref={mapRef => mapRef===null ? null : mapRef.fitToElements(true) }
                      style={styles.mapStyle}    
                      initialRegion={{
                      latitude: 59.436962,
                      longitude: 24.753574,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.3421,
                    }}
                 
              >
              {tasks && tasks.map((task, i) =>      
                <MapView.Marker
                key={i}
                coordinate={{latitude: task[1], longitude: task[0]}}
                />
              )
            }
              </MapView>
              <NavigationButtons />
            </View>      
            );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    statusBar: {
      backgroundColor: "#C2185B",
      height: Constants.statusBarHeight,
    }
  });