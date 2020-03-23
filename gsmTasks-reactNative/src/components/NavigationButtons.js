import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

export const NavigationButtons = (props) => {
         const { navigate } = props.navigation;
         const routeName= props.navigation.state.key;
        
        return(
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
              color={routeName == 'MapPage' ? null : '#D3D3D3'}
                title="Map"
                onPress={() => navigate('MapPage')}
            /> 
            </View>

            <View style={styles.buttonContainer}>
              <Button
              color={routeName == 'AddTaskPage' ? null : '#D3D3D3'}
                title="Add Task"
                onPress={() => navigate('AddTaskPage')}
              />
            </View>
          </View>
          ); 
    }
    export default withNavigation(NavigationButtons);
    
  const styles = StyleSheet.create({  
      container: {
                  // flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
      buttonContainer: {
                    flex: 1,
    }
  });    
