import Link from "next/link";
import styles from "./page.module.css";
import React from "react";

const layout = ({ children }) => {
  return (
    <body>
      <img src="/Bitmap.png" className={styles.primary} />
      <header className={styles.container}>
        <nav className={styles.nav}>
          <a href="/">
            <img
              src="/logo.svg"
              alt="logo
            "
            />
          </a>
          <ul>
            <li>
              <Link href={"/"}>pricing</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.btn}>Schedule a Demo</button>
      </header>
      <main>{children}</main>
    </body>
  );
};

export default layout;
