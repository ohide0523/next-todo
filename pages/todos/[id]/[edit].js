import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../components/AuthContext";
export default function edit() {
  const { editTerm, setEditTerm, onClickUpdate } = useContext(AuthContext);
  console.log(editTerm);
  return (
    <>
      <h1>編集ページ</h1>
      <input
        type="text"
        value={editTerm}
        onChange={(e) => setEditTerm(e.target.value)}
      ></input>
      <Link href="/todos">
        <button onClick={() => onClickUpdate()}>保存</button>
      </Link>
    </>
  );
}
