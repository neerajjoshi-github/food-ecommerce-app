import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const apps = getApps();

const firebaseConfig = {
  apiKey: "AIzaSyCzoDjbbL17M7kI2HWkBuUZB_MR4J3vKc0",
  authDomain: "food-ecommerce-app-7feed.firebaseapp.com",
  databaseURL: "https://food-ecommerce-app-7feed-default-rtdb.firebaseio.com",
  projectId: "food-ecommerce-app-7feed",
  storageBucket: "food-ecommerce-app-7feed.appspot.com",
  messagingSenderId: "393805613315",
  appId: "1:393805613315:web:8b4f397d1f88f12eb98136",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// database
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
