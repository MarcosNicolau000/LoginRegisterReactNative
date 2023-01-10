// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSWa0tpgiR65HS_h8iug09PcTBnAClRE",
  authDomain: "login-register-rn-a1d29.firebaseapp.com",
  projectId: "login-register-rn-a1d29",
  storageBucket: "login-register-rn-a1d29.appspot.com",
  messagingSenderId: "771359690856",
  appId: "1:771359690856:web:6c0d307af50bf6b3372bdd"
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