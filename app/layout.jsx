import Link from "next/link";
import "./page.css";
import React from "react";

const layout = ({ children }) => {
  return (
    <body>
      <img src="/Bitmap.png" className="primary" />
      <header className="container">
        <nav className="nav">
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
        <button className="btn">Schedule a Demo</button>
      </header>
      <main>{children}</main>
    </body>
  );
};

export default layout;
