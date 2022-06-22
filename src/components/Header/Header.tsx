import { FC } from "react";
import logo from "../../static/img/logo.svg";
import s from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import { IMenuItem } from "../../types/menu";
import Button from "../Shared/Button/Button";
import Container from "../Shared/Container/Container";

const Header: FC = () => {
  const menuItems: IMenuItem[] = [
    { text: "About" },
    { text: "Services" },
    { text: "Pricing" },
    { text: "Blog" },
    { text: "About" },
  ];

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <img src={logo} alt="Jupiter logo" className={s.logo} />
          <Navigation menuItems={menuItems} />
          <Button text="Contact" variant="dark" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
