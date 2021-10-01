import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoWEZ8OKBlmRP0HsOoLJg27HRAAnUTOVs",
  authDomain: "next-todo-3d8b4.firebaseapp.com",
  projectId: "next-todo-3d8b4",
  storageBucket: "next-todo-3d8b4.appspot.com",
  messagingSenderId: "442480850011",
  appId: "1:442480850011:web:4a7bde8bfc1f697aeb7b7e",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      alert("ログイン成功です！"), res;
    })
    .catch((error) => {
      alert("ログイン失敗です。。", error);
    });
};

export const logOut = () => {
  signOut(auth)
    .then((res) => {
      alert("ログアウトしました。。");
    })
    .catch((error) => {
      alert("失敗しました。。。");
    });
};
