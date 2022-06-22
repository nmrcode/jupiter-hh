import { FC } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
