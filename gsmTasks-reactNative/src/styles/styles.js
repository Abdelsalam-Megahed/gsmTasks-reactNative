import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
    //AddTaskForm component styles
    textInput: {
        textAlign:'center',
        height:60,
        margin:15,
        borderWidth: 1,
        borderColor: '#d6d7da',
      },
      inputFormat: {
        margin:15,
        fontSize:10,
        paddingBottom:60
      },
      addTaskText: {
        paddingTop:90, 
        paddingBottom:40, 
        paddingLeft:15, 
        fontSize:40
      },
      successText:{
        color:'green', 
        paddingLeft:15,
        fontSize: 10
      },
      submitTaskButton:{
        width: "40%", 
        marginLeft:120, 
        marginBottom:362
      },
    //Map component styles
      mapContainer: {
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
      },
      //NavigationButtons component styles
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