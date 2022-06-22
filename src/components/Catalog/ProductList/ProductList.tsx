import { FC } from "react";
import { IProduct } from "../../../types/product";
import s from "./ProductList.module.scss";
import ProductItem from "./ProductItem/ProductItem";

interface CardListProps {
  products: IProduct[];
}

const ProductList: FC<CardListProps> = ({ products }) => {
  return (
    <div className={s.wrapper}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
