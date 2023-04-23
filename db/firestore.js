import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkCjt-xwItxwz4ujhKh2GpLuemYSQImyM',
  authDomain: 'hotelfacil-255e6.firebaseapp.com',
  projectId: 'hotelfacil-255e6',
  storageBucket: 'hotelfacil-255e6.appspot.com',
  messagingSenderId: '672525573476',
  appId: '1:672525573476:web:98d5c1e4df540fb6fdee71',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
