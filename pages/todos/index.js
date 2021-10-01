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
      <Link href="/todos/id">
        <button>ToDo詳細へ</button>
      </Link>

      <h2>あなたのToDo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.text}</h3>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>ログイン画面へ</button>
      </Link>
    </>
  );
}
