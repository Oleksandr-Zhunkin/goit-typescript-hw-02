import { PropChildren } from "../App/App.types";
import s from "../Container/Container.module.css";

const Container = ({ children }: PropChildren) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
