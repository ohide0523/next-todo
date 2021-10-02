import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import Link from "next/link"

export default function create() {
  const { term, setTerm, onClickAdd } = useContext(AuthContext);
  return (
    <>
      <h1>ToDo作成ページ</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
      <Link href="/todos">
        <button onClick={() => onClickAdd()}>追加</button>
      </Link>
    </>
  );
}
