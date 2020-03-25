import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from '../styles/styles';

export const NavigationButtons = (props) => {
         const { navigate } = props.navigation;
         const routeName= props.navigation.state.key;
         const inActiveButtonColor = '#D3D3D3';
        
        return(
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
              color={routeName == 'MapPage' ? null : inActiveButtonColor}
                title="Map"
                onPress={() => navigate('MapPage')}
            /> 
            </View>

            <View style={styles.buttonContainer}>
              <Button
              color={routeName == 'AddTaskPage' ? null : inActiveButtonColor}
                title="Add Task"
                onPress={() => navigate('AddTaskPage')}
              />
            </View>
          </View>
          ); 
    }
    export default withNavigation(NavigationButtons);
    
 
