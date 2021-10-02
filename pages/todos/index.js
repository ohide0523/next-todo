import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../components/AuthContext";

export default function Home() {
  const { todos } = useContext(AuthContext);
  return (
    <>
      <h1>ToDoトップページ</h1>
      <Link href="/todos/create">
        <button>ToDo作成へ</button>
      </Link>

      <h2>あなたのToDo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{cursor:"pointer"}}>
            <Link href="/todos/id">
            <h3>{todo.text}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>ログイン画面へ</button>
      </Link>
    </>
  );
}
