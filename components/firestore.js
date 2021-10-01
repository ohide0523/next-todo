import firebase from "firebase/compat/app";
import { db } from "./firebase";


export const getStoreData = async(uid)=>{
    const todos = await db.collection("todos").where("uid","==",uid);

    return todos.get().then((todo)=>{
        let todos =[]
        todo.forEach((doc)=>{
            todos.push({
                id:doc.id,
                text:doc.data().text,
            })
        })
        return todos
    })
}

export const addTodo = (content, uid) => {
  db.collection("todos").add({
    text: content,
    time: firebase.firestore.FieldValue.serverTimestamp(),
    uid: uid,
  });
};

export const deleteTodo =(id)=>{
    db.collection("todos").doc(id).delete();
}


export const updateTodo =(content,id)=>{
    db.collection("todos").doc(id).update({
        text:content,
        updatedAt:firebase.firestore.FieldValue.serverTimestamp()
    })
}