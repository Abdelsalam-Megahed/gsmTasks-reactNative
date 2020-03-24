import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import {addNewTask} from '../api/api';
import  NavigationButtons  from './NavigationButtons';
import { styles } from '../styles/styles';

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

