import { MainLayout } from "../components/MainLayout";

export default function About({ title }) {
  return (
    <MainLayout title={"About page"}>
      <div>
        <h1>{title}</h1>
      </div>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();
  return { title: data.title };
};
