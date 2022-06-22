import { FC } from "react";
import s from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps {
  text: string;
  variant: "dark" | "light";
}

const Button: FC<ButtonProps> = ({ text, variant }) => {
  return (
    <button className={cn(s.button, variant === "dark" ? s.dark : s.light)}>
      {text}
    </button>
  );
};

export default Button;
