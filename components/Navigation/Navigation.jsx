import Link from "next/link";

export function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/accessories">Accessories</Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            list-style: none;
          }
          a {
            text-decoration: none;
            color: white;
          }
        `}
      </style>
    </>
  );
}
