import BackgroundPatterns from "../../components/backgroundPatterns/BackgroundPatterns";
import styles from "./style.module.css"

export default function Background() {
  return (
    <section class={styles.backgound}>
      <BackgroundPatterns />
    </section>
  );
}
