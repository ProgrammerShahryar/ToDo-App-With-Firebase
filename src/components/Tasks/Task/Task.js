import React, { useState } from 'react';
import { View, Switch, Text, Pressable, Modal, Alert } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update, remove } from 'firebase/database';
export default function Task(props) {
  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'Are you sure you want to remove this task?', [
      {
        text: 'Yes',
        onPress: () => {
          props.onTaskRemoval(props.task.id);
          removeSpData();
          setShowModal(false);
        }
      },
      {
        text: 'No'
      }
    ]);
  }
  function removeSpData() {
    const spDb = getDatabase();
          remove(ref(spDb, '/shahryar/' + props.task.id))
            .then(() => {
              console.log('Data successfully deleted!');
            })
            .catch((error) => {
              console.log('Error:', error);
            });
  }
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  }
  const handleStatusChangePress = () => {
    props.onStatusChange(props.task.id);
  }
  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.sContainer}>
          <Text style={styles.sTitle}>{props.task.title}</Text>
          <Text style={styles.sText}>
            Status: {props.task.status ? 'Finished' : 'Incomplete'}
          </Text>
        </View>
      </Pressable>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.sModalOverlay}>
          <View style={styles.sModalContent}>
            <Text style={styles.sModalTitle}>{props.task.title}</Text>
            <Pressable onPress={handleStatusChangePress} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Toggle Status</Text>
              <Switch
                  value={props.task.status}
                  onValueChange={handleStatusChangePress}
                />
            </Pressable>
            <Pressable onPress={handleRemovePress} style={styles.sModalButton}>
              <Text style={styles.sModalButtonText}>Remove</Text>
              <Ionicons name="ios-trash" size={20} color="white" />
            </Pressable>
            <Pressable onPress={handleModalToggle} style={styles.sModalCloseButton}>
              <Ionicons name="ios-close" size={30} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyAiWQgdvkVxyaTxucIt2NlBemr-w-d8RTg",
  authDomain: "lab-2-e9316.firebaseapp.com",
  databaseURL: "https://lab-2-e9316-default-rtdb.firebaseio.com",
  projectId: "lab-2-e9316",
  storageBucket: "lab-2-e9316.appspot.com",
  messagingSenderId: "69448636028",
  appId: "1:69448636028:web:d6e362550b3db987529bf9"
};
