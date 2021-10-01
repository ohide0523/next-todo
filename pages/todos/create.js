import React,{useContext} from "react"
import {AuthContext} from "../../components/AuthContext"


export default function create(){
    const {term,setTerm,onClickAdd} = useContext(AuthContext)
    return (
        <>
        <h1>ToDo作成ページ</h1>
        <input type="text" value={term} onChange={e=>setTerm(e.target.value)}></input>
        <button onClick={()=>onClickAdd()}>追加</button>
        </>
    )
}