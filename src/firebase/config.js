import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdsckPjohXmlKJuV55jd45TDKAvr2f5Co",
  authDomain: "mychef-site.firebaseapp.com",
  projectId: "mychef-site",
  storageBucket: "mychef-site.appspot.com",
  messagingSenderId: "765197562653",
  appId: "1:765197562653:web:d86f1186e0cb1d0648a7f4",
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
