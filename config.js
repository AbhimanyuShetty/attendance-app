import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBlOfgASakxPKwV1PjxxXMh-x_dJuG4GaE",
  authDomain: "attendance-final-64262.firebaseapp.com",
  projectId: "attendance-final-64262",
  storageBucket: "attendance-final-64262.appspot.com",
  messagingSenderId: "6683621072",
  appId: "1:6683621072:web:8e03048cfbdcf8078410d5"
};
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();