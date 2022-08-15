import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9pzkZeqoUK9a1c9ytJeHGd8UvRoS57tc",
  authDomain: "brain-wave-auth.firebaseapp.com",
  projectId: "brain-wave-auth",
  storageBucket: "brain-wave-auth.appspot.com",
  messagingSenderId: "568884532897",
  appId: "1:568884532897:web:43f5d231fb49637397c2e0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);