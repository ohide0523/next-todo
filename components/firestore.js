import firebase from "firebase/compat/app";
import { db } from "./firebase";

export const getStoreData = async (uid) => {
  const todos = await db.collection("todos").where("uid", "==", uid);

  return todos.get().then((todo) => {
    let todos = [];
    todo.forEach((doc) => {
      todos.push({
        id: doc.id,
        text: doc.data().text,
        title: doc.data().title,
        isComp: doc.data().isComp,
      });
    });
    return todos;
  });
};

export const getSortData = async (uid) => {
  const todos = await db.collection("todos").orderBy("time","desc").where("uid", "==", uid);

  return todos.get().then((todo) => {
    let todos = [];
    todo.forEach((doc) => {
      todos.push({
        id: doc.id,
        text: doc.data().text,
        title: doc.data().title,
        isComp: doc.data().isComp,
      });
    });
    return todos;
  });
};

export const addTodo = (termTitle, uid, termContent) => {
  db.collection("todos").add({
    title: termTitle,
    text: termContent,
    time: firebase.firestore.FieldValue.serverTimestamp(),
    uid: uid,
  });
};

export const deleteTodo = (id) => {
  db.collection("todos").doc(id).delete();
};

export const updateTodo = (title, id, content) => {
  db.collection("todos").doc(id).update({
    title: title,
    text: content,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const toggleComp = async (id) => {
  const todo = await db.collection("todos").doc(id).get();
  return db
    .collection("todos")
    .doc(id)
    .update({
      isComp: todo.data().isComp ? false : true,
    });
};
