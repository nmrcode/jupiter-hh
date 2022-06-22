import { FC, useEffect } from "react";
import s from "./ProductItem.module.scss";
import { IProduct } from "../../../../types/product";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { toggleActive } from "../../../../store/slices/productsSlice";
import cn from "classnames";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const { category, imageUrl, title, id, active } = product;
  const dispatch = useAppDispatch();
  const match = useMediaQuery("(max-width: 992px)");

  const handleSelectItem = (id: string) => {
    if (!match) dispatch(toggleActive(id));
  };

  return (
    <article
      className={cn(s.card, active && s.active)}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={() => handleSelectItem(id)}
    >
      <div className={s.body}>
        <div className={s.category}>{category}</div>
        <h3 className={s.title}>{title}</h3>
      </div>
    </article>
  );
};

export default ProductItem;
