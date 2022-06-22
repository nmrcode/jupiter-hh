import { FC } from "react";
import Container from "../Shared/Container/Container";
import s from "./Catalog.module.scss";
import Filters from "./Filters/Filters";

const filterItems = [
  "Show All",
  "Design",
  "Branding",
  "Illustration",
  "Motion",
];

const Catalog: FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Filters filterItems={filterItems} />
      </Container>
    </section>
  );
};

export default Catalog;
