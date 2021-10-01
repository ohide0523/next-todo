import React, { useContext } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AuthContext } from "../components/AuthContext";

export default function Home() {
  const { isLogin,onClickLogin,onClickLogOut } = useContext(AuthContext);
  
  return (
    <div className={styles.container}>
      <h1>
        さあ<span>ToDoアプリ</span>を始めよう！
      </h1>
      {isLogin ? (
        <>
          <button onClick={onClickLogOut}>ログアウト</button>
          <Link href="/todos">
            <button>ToDoトップページへ</button>
          </Link>
        </>
      ) : (
        <button onClick={onClickLogin}>ログイン</button>
      )}
    </div>
  );
}
