import Head from "next/head";
import { Navigation } from "./Navigation/Navigation";

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <meta name="description" content="Some online shop" />
        <meta name="keywords" content="online shop, product, accessory" />
        <title>{title} || Online Shop</title>
      </Head>

      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>{children}</main>

      <style jsx>{`
        nav {
          background-color: blue;
          min-height: 60px;
        }
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  );
}
