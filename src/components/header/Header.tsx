import styles from "./style.module.css";

export default function Header() {
  return (
    <header class={styles.header}>
      <nav class={styles.nav}>
        <ul class={styles.nav__list} role="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="/Background">backhround info</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
