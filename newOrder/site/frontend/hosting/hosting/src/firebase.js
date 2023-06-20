import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCJbg9zItEy8DFIRKBWP1qO8Ggcu13yVYg",
  authDomain: "el-interior.firebaseapp.com",
  projectId: "el-interior",
  storageBucket: "el-interior.appspot.com",
  messagingSenderId: "20339001367",
  appId: "1:20339001367:web:7ce2d7a92366383dc0b452",
  measurementId: "G-3S4FEED73N",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default getAuth(firebaseApp);


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
  } else {
    console.log("no user");
  }
});

export {db, auth}