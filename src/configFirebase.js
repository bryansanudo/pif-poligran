import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArtRW1HaCXWYzTOMebv5lNgNcTBcmZHl4",
  authDomain: "apppoligran.firebaseapp.com",
  projectId: "apppoligran",
  storageBucket: "apppoligran.appspot.com",
  messagingSenderId: "414567357672",
  appId: "1:414567357672:web:8ebff28a3c2c3ce4e6fd5d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
