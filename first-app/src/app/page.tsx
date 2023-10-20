import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello World</p>
      <Link href="/about">Click this to go the about page</Link>
    </main>
  );
}
