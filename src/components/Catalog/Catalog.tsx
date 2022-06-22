import { FC } from "react";
import Container from "../Shared/Container/Container";
import s from "./Catalog.module.scss";
import Filters from "./Filters/Filters";
import ProductList from "./ProductList/ProductList";
import { IProduct } from "../../types/product";
import p1 from "../../static/img/1.png";
import p2 from "../../static/img/2.png";
import p3 from "../../static/img/3.png";
import p4 from "../../static/img/4.png";
import p5 from "../../static/img/5.png";
import p6 from "../../static/img/6.png";
import p7 from "../../static/img/7.png";
import p8 from "../../static/img/8.png";
import p9 from "../../static/img/9.png";
import LoadMore from "./LoadMore/LoadMore";

const products: IProduct[] = [
  { category: "Design", title: "Sofa", imageUrl: p1 },
  { category: "Branding", title: "KeyBoard", imageUrl: p2 },
  { category: "Illustration", title: "Work Media", imageUrl: p3 },
  { category: "Motion", title: "DDDone", imageUrl: p4 },
  { category: "Design", title: "Abstract", imageUrl: p5 },
  { category: "Branding", title: "HandP", imageUrl: p6 },
  { category: "Motion", title: "Architect", imageUrl: p7 },
  { category: "Design", title: "CalC", imageUrl: p8 },
  { category: "Branding", title: "Sport", imageUrl: p9 },
];

const Catalog: FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Filters />
        <ProductList products={products} />
        <LoadMore />
      </Container>
    </section>
  );
};

export default Catalog;
