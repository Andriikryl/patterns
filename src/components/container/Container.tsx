import { Component, JSX } from "solid-js";
import styles from "./style.module.css";

interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

const Container: Component<ContainerProps> = (props) => {
  return <div class={styles.container}>{props.children}</div>;
};

export default Container;
