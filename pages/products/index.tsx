import { NextPageContext } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import { MyProduct } from "../../interfaces/product";

interface ProductsPageProps {
  products: MyProduct[];
}

export default function Products({
  products: serverProducts,
}: ProductsPageProps) {
  const [products, setProducts] = useState(serverProducts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/products");
      const data = await response.json();

      setProducts(data);
    }

    if (!serverProducts) load();
  }, []);
  if (!products) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout title="Products page">
      <h1>Products page</h1>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/product/[id]`} as={`/product/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Products.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { products: null };
  }

  const response = await fetch(`${process.env.API_URL}/products`);
  const products: MyProduct[] = await response.json();
  return {
    products,
  };
};
