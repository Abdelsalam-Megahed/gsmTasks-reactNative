import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import {fetchTasks} from '../api/api';
import NavigationButtons  from './NavigationButtons';
import { styles } from '../styles/styles';

const MapComponent = () => {
  const [tasks, setTasks] = useState([]);
  const bufferInterval = 5000;

  useEffect(() => {
    setTimeout(() => {
      getAllTasks();

    }, bufferInterval);

  }, []);

  const getAllTasks = async () => {
    try{  
         const results = await fetchTasks();         
         const coordinates = await results.map(result => result.address.location.coordinates);         
         if(coordinates !== null){
           setTasks(coordinates);
         }
       }catch(error){
         console.log("MapComponentError" + " " + error);
      }     

    }  
  
    return (
            <View>
              <MapView 
                        ref={mapRef => mapRef === null ? null : mapRef.fitToElements(true) }
                        style={styles.mapStyle}    
                        initialRegion={{
                        latitude: 59.436962,
                        longitude: 24.753574,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.3421,
                      }}  
                >
                { tasks && tasks.map((task, i) =>      
                  <MapView.Marker
                  key={i}
                  coordinate={{
                    latitude: task[1], 
                    longitude: task[0]
                }}
                  />
                )
              }
                </MapView>
                
                <NavigationButtons />
            </View>      
            );
    }
export default MapComponent;