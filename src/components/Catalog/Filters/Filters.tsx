import { FC } from "react";
import s from "./Filters.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface FiltersProps {
  filterItems: string[];
}

const Filters: FC<FiltersProps> = ({ filterItems }) => {
  const match = useMediaQuery("(max-width: 992px)");

  return (
    <>
      {!match ? (
        <div className={s.wrapper}>
          {filterItems.map((filter) => (
            <button key={filter} className={s.button}>
              {filter}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Filters;
