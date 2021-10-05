import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../components/AuthContext";

export default function Home() {
  const { todos, onClickDelete, sendEditId, checkHandle } =
    useContext(AuthContext);

  return (
    <>
      <h1>ToDo詳細ページ</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>タイトル：{todo.title}</h3>
            <h4>内容：{todo.text}</h4>
            <select onChange={() => checkHandle(todo.id)}>
              <option>未完了</option>
              <option>完了</option>
            </select>
            <Link href="/todos">
              <button onClick={() => onClickDelete(todo.id)}>削除</button>
            </Link>

            <Link href="/todos/[id]/edit">
              <button onClick={() => sendEditId(todo.id)}>編集</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
