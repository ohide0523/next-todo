import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../components/AuthContext";
export default function edit() {
  const { editTerm, setEditTerm,editTermContent, setEditTermContent, onClickUpdate } = useContext(AuthContext);
  console.log(editTerm);
  return (
    <>
      <h1>編集ページ</h1>
      <label>
        タイトル
      </label>
      <input
        type="text"
        value={editTerm}
        onChange={(e) => setEditTerm(e.target.value)}
      ></input>
      <label>
        内容
      </label>
      <input
      type="textarea"
      value={editTermContent}
      onChange={e=>setEditTermContent(e.target.value)}
      />
      <Link href="/todos">
        <button onClick={() => onClickUpdate()}>保存</button>
      </Link>
    </>
  );
}
