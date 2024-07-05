import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import styles from './styles';
import { addSpData } from '../SpDataMethod/SpDataMethods';

export default function Form(props) {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = () => {
    if (taskDescription) {
      addSpData(taskDescription, taskDone);
      props.onAddTask(taskDescription, taskDone);

      setErrorMessage(null);
      setTaskDescription('');
      setTaskDone(false);

      Keyboard.dismiss();
    }
    else {
      setErrorMessage('The title is required.');
    }
  }

  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
  }

  const handleStatusChange = (value) => {
    setTaskDone(value);
  }

  return (
    <View style={styles.container}>
      {errorMessage && (
       <View style={styles.errorMessageContainer}>


       <Text style={styles.errorMessageLabel}>Alert:</Text>

       <Text style={styles.errorMessageText}>{errorMessage}</Text>
     </View>
      )}

      <TextInput
        placeholder='Enter task title'
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription}
        style={styles.textbox}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Completed:</Text>
        <Switch
          value={taskDone}
          onValueChange={handleStatusChange}
        />
      </View>

      <Button
        title='Add'
        onPress={handleAddPress}
        color="#4CAF50"
      />
    </View>
  );
}