import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {addNewTask} from '../api/api';
import  NavigationButtons  from './NavigationButtons';

export default class AddTaskForm extends React.Component{
    state = {
        address: '',
        isFormValid: false,
        success: false,
        error: ''
    }

    handleAddressChange = address => {
        this.setState({address});
        if(this.state.address.length > 8 && this.state.address.match(/[,#-\/\s\!\@\$.....]/))
            {
            this.setState({isFormValid: true})
        }else{
            this.setState({isFormValid: false})
        }
    }
    
    handleSubmit = () => {
        if(this.state.isFormValid){
            addNewTask(this.state.address)
            this.setState({success: true, address: '', isFormValid: false})
        }else{
            this.setState({error: 'Address is not valid'})
        }
    }

    render(){
        return ( 
             <View>
             <Text style={styles.addTaskText}>Add Task</Text>

                {this.state.error !== null ? 
                    <Text style={{color: 'red'}}>{this.state.error}</Text> : null}

            <TextInput 
                style={styles.textInput}
                placeholder="Address" 
                value={this.state.address} 
                onChangeText={this.handleAddressChange}
            />
            <Text style={styles.inputFormat}>Please make sure to enter a valid address. 
                {this.state.success && 
                    <Text style={styles.successText}>Task has been added successfully</Text>}
            </Text>
           
            <View style={styles.submitTaskButton}>
                <Button 
                title="Add Task" 
                disabled={!this.state.isFormValid}
                onPress={this.handleSubmit}
                />
            </View>
                 <NavigationButtons />
            </View>
         );
    }
   
}

const styles = StyleSheet.create({
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
      }
  });