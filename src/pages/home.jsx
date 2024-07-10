import { useSearchParams } from "react-router-dom";


import { Header } from "../components/header";

export const Home = () => {
  const [searchParams,setSearchParams] = useSearchParams({name:'Pedro',lastName:'chimuse'})
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <p>{searchParams.get("name")}</p>
        <p>{searchParams.get("lastName")}</p>
        </main>
    </>
  );
};

