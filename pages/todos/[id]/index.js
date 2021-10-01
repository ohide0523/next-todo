import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../components/AuthContext";

export default function Home() {
  const { todos, onClickDelete, sendEditId } = useContext(AuthContext);

  return (
    <>
      <h1>ToDo詳細ページ</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.text}</h3>
            <button onClick={() => onClickDelete(todo.id)}>削除</button>
            <Link href="/todos/[id]/edit">
              <button onClick={() => sendEditId(todo.id)}>編集</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
