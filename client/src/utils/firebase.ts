import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, connectAuthEmulator, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { Environment } from '@/types/environent';

const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  FIREBASE_CONFIG: {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
    measurementId: process.env.NEXT_PUBLIC_measurementId
  }
}


const app = (getApps().length === 0 ? initializeApp(config.FIREBASE_CONFIG) : getApp())
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


try {
  if (config.ENVIRONMENT == Environment.Development) {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, "localhost", 9199);
  }

} catch (err) {
  console.error(err)
}


import { collection, getDocs, addDoc } from "firebase/firestore";

const fun = async () => {

  try {
    const q = await getDocs(collection(db, "dummy"));

    q.forEach((doc) => {
      console.log("🔥 ~ q.forEach ~ doc:", doc.data())
    });

    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });
  }
  catch (err) {
    console.error("🔥 ~ fun ~ err:", err)

  }
}

fun()





