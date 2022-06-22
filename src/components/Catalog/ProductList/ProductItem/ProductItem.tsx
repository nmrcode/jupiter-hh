import { FC } from "react";
import s from "./ProductItem.module.scss";
import { IProduct } from "../../../../types/product";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const { category, imageUrl, title } = product;
  return (
    <article
      className={s.card}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className={s.body}>
        <div className={s.category}>{category}</div>
        <h3 className={s.title}>{title}</h3>
      </div>
    </article>
  );
};

export default ProductItem;
