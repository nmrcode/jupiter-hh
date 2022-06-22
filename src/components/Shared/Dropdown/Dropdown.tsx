import { FC, useState } from "react";
import { IFilter } from "../../../types/filter";
import s from "./Dropdown.module.scss";
import cn from "classnames";

interface DropdownProps {
  data: IFilter[];
}

const Dropdown: FC<DropdownProps> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState<any>(items[0]);

  const toggleDropdown = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickOnItem = (id: number) => {
    const selected = items.find((item) => item.id === id);
    setSelectedItem(selected);
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={cn(s.dropdown, isOpen && s.open)}>
      <div className={s.header} onClick={toggleDropdown}>
        {selectedItem.value}
      </div>
      {isOpen ? (
        <div className={s.body}>
          {items.map((item) => (
            <div
              key={item.id}
              className={s.item}
              onClick={(e) => handleClickOnItem(item.id)}
            >
              {item.text}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
