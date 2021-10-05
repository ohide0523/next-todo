import React, { createContext, useState, useEffect } from "react";
import { auth, signInWithGoogle, logOut } from "./firebase";
import * as Store from "./firestore";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [termContent, setTermContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const [editTerm, setEditTerm] = useState("");
  const [editTermContent, setEditTermContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    if (currentUser === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [currentUser]);

  useEffect(() => {
    fetch();
  }, [currentUser]);

  const onClickLogin = async () => {
    await signInWithGoogle();
  };

  const onClickLogOut = async () => {
    await logOut();
  };

  const onClickAdd = async () => {
    await Store.addTodo(term, currentUser.uid, termContent);
    await setTerm("");
    fetch();
  };

  const onClickDelete = async (id) => {
    await Store.deleteTodo(id);
    fetch();
  };

  const sendEditId = (id) => {
    setEditId(id);
    console.log(editId);
  };

  const onClickUpdate = async () => {
    if (editTerm === "") {
      Ï;
      alert("文字を入力してください");
    } else {
      await Store.updateTodo(editTerm, editId, editTermContent);
      await fetch();
      setEditTerm("");
    }
  };

  const checkHandle = async (id) => {
    await Store.toggleComp(id);
    await fetch();
    console.log("comp");
  };

  const fetch = async () => {
    if (currentUser) {
      const data = await Store.getStoreData(currentUser.uid);
      await setTodos(data);
    }
  };

  const fetch2 = async () => {
    if (currentUser) {
      const data = await Store.getSortData(currentUser.uid);
      await setTodos(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        term,
        setTerm,
        termContent,
        setTermContent,
        todos,
        setTodos,
        currentUser,
        isLogin,
        fetch,
        fetch2,
        onClickLogin,
        onClickLogOut,
        onClickAdd,
        onClickDelete,
        sendEditId,
        onClickUpdate,
        checkHandle,
        editTerm,
        setEditTerm,
        editTermContent,
        setEditTermContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
