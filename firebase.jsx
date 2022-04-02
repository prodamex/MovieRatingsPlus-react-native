// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJLWsVohZjUNGaJtxD2e2K-iyUrS3uEU",
  authDomain: "fir-auth-3aa57.firebaseapp.com",
  projectId: "fir-auth-3aa57",
  storageBucket: "fir-auth-3aa57.appspot.com",
  messagingSenderId: "29263076277",
  appId: "1:29263076277:web:f09db07181bfd5819257fc"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };