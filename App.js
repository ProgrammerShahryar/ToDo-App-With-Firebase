import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const Tab = createBottomTabNavigator();
export default function App() {
  const spApp = initializeApp(firebaseConfig);
  const spDatabase = getDatabase(spApp);
  const sDb = getDatabase();
  const spDbRef = ref(sDb, '/shahryar');
  let spUpdatedTasks = [];
  let updatedTasks = [];

  const handleAddTask = () => {
    spShowData();
  }

  const [tasks, setTasks] = useState(
    []
  );

  function spShowData(){
    onValue(spDbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const spChildKey = childSnapshot.key;
      const spChildData = childSnapshot.val();
     spUpdatedTasks = [...tasks];
    spUpdatedTasks.push(
      {
        title: spChildData.title,
        status: spChildData.status
      }
    );
    setTasks(spUpdatedTasks);
  });
}, { onlyOnce: true });
  }
  

  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(updatedTasks);
  }

  function spDataUpdate(id){
    const spUpdates = {};
spUpdates['/shahryar/' + id] = updatedTasks;
const sDb = getDatabase();
update(ref(sDb), spUpdates)
.then(() => {
console.log('Data successfully updated!');
})
.catch((error) => {
console.log('Error:', error);
});
  }

  const handleStatusChange = (id) => {
     updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    spDataUpdate(id);
    setTasks(updatedTasks);
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconSharry;
            if (route.name === 'Add') {
              iconSharry = 'ios-add';
            }
            if (route.name === 'Settings') {
              iconSharry = 'ios-settings';
            } else if (route.name === 'List') {
              iconSharry = 'ios-list-outline';
            }
            return <Ionicons name={iconSharry} size={37} color={color} />;
          },
        })}
        >
          <Tab.Screen name='List'>
            {(props) => (
              <Tasks {...props} tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemoval={handleTaskRemoval} />
            )}
          </Tab.Screen>
          <Tab.Screen name='Add'>
            {(props) => (
              <Form {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
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
  

  