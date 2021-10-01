import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Link href="/todos">
        <button>トップページへ戻る</button>
      </Link>
    </>
  );
}

export default Layout;
