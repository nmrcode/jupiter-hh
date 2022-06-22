import { FC } from "react";
import Button from "../../Shared/Button/Button";
import s from "./LoadMore.module.scss";

const LoadMore: FC = () => {
  return (
    <div className={s.wrapper}>
      <Button text="LOAD MORE" variant="light" />
    </div>
  );
};

export default LoadMore;
