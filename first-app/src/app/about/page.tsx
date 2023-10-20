import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  // throw new Error("Not today");
  return (
    <>
      <main className={styles.main}></main>
      <div>This is the about section of the application</div>
      <Link href="/">Click this to go back to the home page</Link>
    </>
  );
}
