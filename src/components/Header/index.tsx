import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function Header() {
  const currentData = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr logo"></img>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentData}</span>
    </header>
  );
}
