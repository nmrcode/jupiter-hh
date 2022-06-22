import { FC } from "react";
import { IProduct } from "../../../types/product";
import s from "./ProductList.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import Button from "../../Shared/Button/Button";
import p1 from "../../../static/img/1.png";
import p2 from "../../../static/img/2.png";
import p3 from "../../../static/img/3.png";
import p4 from "../../../static/img/4.png";
import p5 from "../../../static/img/5.png";
import p6 from "../../../static/img/6.png";
import p7 from "../../../static/img/7.png";
import p8 from "../../../static/img/8.png";
import p9 from "../../../static/img/9.png";
import { useAppSelector } from "../../../hooks/useAppSelector";

const ProductList: FC = () => {
  const filteredProducts = useAppSelector(
    (state) => state.product.filteredProducts
  );

  if (!filteredProducts.length) return null;

  return (
    <>
      {filteredProducts.length ? (
        <div className={s.wrapper}>
          {filteredProducts.map((product) => (
            <ProductItem key={product.title} product={product} />
          ))}
        </div>
      ) : (
        <div className={s.error}>Products not found</div>
      )}
    </>
  );
};

export default ProductList;
