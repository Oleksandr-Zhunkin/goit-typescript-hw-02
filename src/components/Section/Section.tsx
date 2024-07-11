import { PropChildren } from "../App/App.types";
import s from "../Section/Section.module.css";

const Section = ({ children }: PropChildren) => {
  return <section className={s.section}>{children}</section>;
};

export default Section;
