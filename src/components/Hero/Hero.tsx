import { FC } from "react";
import s from "./Hero.module.scss";
import Container from "../Shared/Container/Container";

const Hero: FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.title}>Portfolio</h1>
          <p className={s.subtitle}>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
