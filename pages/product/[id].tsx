import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { MyProduct } from "../../interfaces/product";
import { NextPageContext } from "next";

interface ProductPageProps {
  product: MyProduct;
}

export default function Product({ product: serverProduct }: ProductPageProps) {
  const [product, setProduct] = useState(serverProduct);
  const router = useRouter();
  const productId = router.query.id;

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${process.env.API_URL}/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    }
    if (!serverProduct) {
      load();
    }
  }, []);

  if (!product) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  const { id, title, quantity, price } = product;

  const btnClickHandler = (e) => Router.push("/products");

  return (
    <MainLayout>
      <h1>Product №{id}</h1>
      <div>
        <h2>{title}</h2>
        <p>Price: {price}грн.</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={btnClickHandler}>Go to Products</button>
      <button
        onClick={() => {
          Router.push("/");
        }}
      >
        Go to Home page
      </button>
    </MainLayout>
  );
}
//
// Product.getInitialProps = async (ctx, req) => {
//   if (!req) {
//     return {
//       product: null,
//     };
//   }
//   const response = await fetch(
//     `http://localhost:4200/products/${ctx.query.id}`
//   );
//   const product = await response.json();

//   return { product };
// };

interface ProductNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export async function getServerSideProps({
  query,
  req,
}: ProductNextPageContext) {
  const response = await fetch(`http://localhost:4200/products/${query.id}`);
  const product: MyProduct = await response.json();

  return { props: { product } };
}
