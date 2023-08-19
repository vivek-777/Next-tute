import EventFunction from "../../public/components/EventFunctionState";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <EventFunction />
      <h1>Home Page</h1>
    </main>
  );
}
