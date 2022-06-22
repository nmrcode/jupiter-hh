import { FC } from "react";
import s from "./Filters.module.scss";

interface FiltersProps {
  filterItems: string[];
}

const Filters: FC<FiltersProps> = ({ filterItems }) => {
  return (
    <div className={s.wrapper}>
      {filterItems.map((filter) => (
        <button className={s.button}>{filter}</button>
      ))}
    </div>
  );
};

export default Filters;
