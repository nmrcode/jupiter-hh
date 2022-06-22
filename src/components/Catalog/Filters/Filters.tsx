import { FC } from "react";
import s from "./Filters.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import { IFilter } from "../../../types/filter";

const filterItems: IFilter[] = [
  { id: 1, value: "Show All" },
  { id: 2, value: "Design" },
  { id: 3, value: "Branding" },
  { id: 4, value: "Illustration" },
  { id: 5, value: "Motion" },
];

const Filters: FC = () => {
  const match = useMediaQuery("(max-width: 992px)");

  return (
    <>
      {!match ? (
        <div className={s.wrapper}>
          {filterItems.map((filter) => (
            <button key={filter.id} className={s.button}>
              {filter.value}
            </button>
          ))}
        </div>
      ) : (
        <Dropdown data={filterItems} />
      )}
    </>
  );
};

export default Filters;
