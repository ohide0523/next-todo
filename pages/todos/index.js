import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { AuthContext } from "../../components/AuthContext";

export default function Home() {
  const { todos, setTodos, sortFetch, fetch, fetch2 } = useContext(AuthContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notDone":
          setFilteredTodos(todos.filter((todo) => todo.isComp === false));
          break;
        case "done":
          setFilteredTodos(todos.filter((todo) => todo.isComp === true));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]);

  useEffect(() => {
    switch (sort) {
      case "id":
        fetch();
        break;
      case "number":
        fetch2();
    }
  }, [sort, todos]);
  return (
    <div>
      <h1>ToDoトップページ</h1>
      <Link href="/todos/create">
        <button>ToDo作成へ</button>
      </Link>
      <h2>あなたのToDo</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <h3>絞り込み</h3>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">全て</option>
            <option value="notDone">未完了</option>
            <option value="done">完了</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>並べ替え</h3>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="id">ID順</option>
            <option value="number">追加順</option>
          </select>
        </div>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center" }}>
            <Link href="/todos/id">
              <h3 style={{ marginRight: "10px", cursor: "pointer" }}>
                {todo.title}
              </h3>
            </Link>
            {console.log(todo.isComp)}
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>ログイン画面へ</button>
      </Link>
    </div>
  );
}
