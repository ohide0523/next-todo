import React,{useContext} from "react"
import {AuthContext} from "../../../components/AuthContext"
export default function edit(){
    const {editTerm,setEditTerm,onClickUpdate} =useContext(AuthContext)
    console.log(editTerm)
    return (
        <>
        <h1>編集ページ</h1>
        <input type="text" value={editTerm} onChange={e=>setEditTerm(e.target.value)}></input>
        <button onClick={()=>onClickUpdate()}>保存</button>
        </>
    )
}