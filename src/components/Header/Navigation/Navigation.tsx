import { FC } from "react";
import s from "./Navigation.module.scss";
import { IMenuItem } from "../../../types/menu";

interface NavigationProps {
  menuItems: IMenuItem[];
}

const Navigation: FC<NavigationProps> = ({ menuItems }) => {
  return (
    <nav className={s.nav}>
      {/*Лучше не использовать индекс в качестве ключа, но за неимением уникальных путей пренебрег этим*/}
      {menuItems.map((item, index) => (
        <a key={index} href="/" className={s.link}>
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
