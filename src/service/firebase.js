import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyATCM5zjJ4clX0CD1mv3BOqL8cagb0wCsA",
    authDomain: "pokemon-game-2cabf.firebaseapp.com",
    databaseURL: "https://pokemon-game-2cabf-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-2cabf",
    storageBucket: "pokemon-game-2cabf.appspot.com",
    messagingSenderId: "995335619824",
    appId: "1:995335619824:web:b67878f2732d34a4432e35"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;

export const database = fire.database();

export default database;