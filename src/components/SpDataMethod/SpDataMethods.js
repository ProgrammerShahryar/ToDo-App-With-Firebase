import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAiWQgdvkVxyaTxucIt2NlBemr-w-d8RTg",
  authDomain: "lab-2-e9316.firebaseapp.com",
  databaseURL: "https://lab-2-e9316-default-rtdb.firebaseio.com",
  projectId: "lab-2-e9316",
  storageBucket: "lab-2-e9316.appspot.com",
  messagingSenderId: "69448636028",
  appId: "1:69448636028:web:d6e362550b3db987529bf9"
};
const app = initializeApp(firebaseConfig);
const spDb = getDatabase(app);

export function addSpData(title, status) {
    const spListRef = ref(spDb, '/shahryar');
    const spPushRef = push(spListRef);
    const spData = {
       title: title, 
       status: status
      };
    set(spPushRef, spData)
      .then(() => {
        console.log('Data successfully added:', spPushRef.key);
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }