import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home page">
      <div>
        <h1>Main page</h1>
      </div>
    </MainLayout>
  );
}
