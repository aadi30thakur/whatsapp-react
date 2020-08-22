import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALMFSn5ZlQwNs0l5zx-vGo-YTiQWoLRA8",
  authDomain: "whatsapp-react-28b4b.firebaseapp.com",
  databaseURL: "https://whatsapp-react-28b4b.firebaseio.com",
  projectId: "whatsapp-react-28b4b",
  storageBucket: "whatsapp-react-28b4b.appspot.com",
  messagingSenderId: "525199461092",
  appId: "1:525199461092:web:41d34bfd0605d423c47af1",
  measurementId: "G-LLD64X3TPT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
