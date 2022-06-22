import { FC } from "react";
import Container from "../Shared/Container/Container";
import s from "./Catalog.module.scss";
import Filters from "./Filters/Filters";
import ProductList from "./ProductList/ProductList";
import LoadMore from "./LoadMore/LoadMore";

const Catalog: FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Filters />
        <ProductList />
        <LoadMore />
      </Container>
    </section>
  );
};

export default Catalog;
