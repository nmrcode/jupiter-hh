import { FC } from "react";
import s from "./Filters.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import { IFilter } from "../../../types/filter";

const filterItems: IFilter[] = [
  { id: 1, text: "Show All", value: "SHOW_ALL" },
  { id: 2, text: "Design", value: "DESIGN" },
  { id: 3, text: "Branding", value: "BRANDING" },
  { id: 4, text: "Illustration", value: "ILLUSTRATION" },
  { id: 5, text: "Motion", value: "MOTION" },
];

const Filters: FC = () => {
  const match = useMediaQuery("(max-width: 992px)");

  return (
    <>
      {!match ? (
        <div className={s.wrapper}>
          {filterItems.map((filter) => (
            <button key={filter.id} className={s.button}>
              {filter.text}
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
