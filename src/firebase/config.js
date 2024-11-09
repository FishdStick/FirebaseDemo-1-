import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDChmV6sjQgFe-4FgiXNdA4ByJsj84Bpd0",
  authDomain: "react-firebase-demo-62abb.firebaseapp.com",
  projectId: "react-firebase-demo-62abb",
  storageBucket: "react-firebase-demo-62abb.firebasestorage.app",
  messagingSenderId: "778074191701",
  appId: "1:778074191701:web:b6a7c2c09381cbcc98e1dc",
  measurementId: "G-VY51MGBWEG"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export {db}

