import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import Link from "next/link"

export default function create() {
  const { term, setTerm,termContent,setTermContent, onClickAdd } = useContext(AuthContext);
  return (
    <>
      <h1>ToDo作成ページ</h1>
      <label>
        タイトル
      </label>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
      <label>
        内容
      </label>
      <input 
      type="textarea"
      value={termContent}
      onChange={e=>setTermContent(e.target.value)}
      />
      <Link href="/todos">
        <button onClick={() => onClickAdd()}>追加</button>
      </Link>

    </>
  );
}
