import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { addNewTask } from '../api/api';
import  NavigationButtons  from './NavigationButtons';
import { styles } from '../styles/styles';

const AddTaskForm = () => {
    const [address, setAddress] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    handleAddressChange = address => {
        setAddress(address);
        if(address.length > 8 && address.match(/[,#-\/\s\!\@\$.....]/))
            {
                setIsFormValid(true);
        }else{
                setIsFormValid(false);
        } 
    }

    handleSubmit = () => {
        if(isFormValid){
            addNewTask(address);
            setSuccess(true);
            setAddress('');
            setIsFormValid(false);
        }else{
            setError(true);
        }
    }

    return(
        <View>
             <Text style={styles.addTaskText}>Add Task</Text>

            <TextInput 
                style={styles.textInput}
                placeholder="Address" 
                value={address} 
                onChangeText={handleAddressChange}
            />
            <Text style={styles.inputFormat}>Please make sure to enter a valid address. 
                {error ? 
                    <Text style={{color: 'red'}}>Please enter a valid address.</Text> : null}

                {success && 
                    <Text style={styles.successText}>Task has been added successfully</Text>}
            </Text>
           
            <View style={styles.submitTaskButton}>
                <Button 
                title="Add Task" 
                disabled={!isFormValid}
                onPress={handleSubmit}
                />
            </View>
                 <NavigationButtons />
            </View>
    );
}

export default AddTaskForm;


