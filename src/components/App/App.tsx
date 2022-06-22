import { FC } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Catalog from "../Catalog/Catalog";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
      </main>
    </>
  );
};

export default App;
