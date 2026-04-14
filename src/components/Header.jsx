import { useState } from "react";

export default function Header() {

  const [menu, setMenu] = useState(false);

  return (

    <header className="header">

      <img
        src="/assets/logo.png"
        className="logo"
        alt="logo"
      />

      <nav className={menu ? "nav active" : "nav"}>

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#destination">Destination</a>
        <a href="#contact">Contact</a>

      </nav>

      <div
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        ☰
      </div>

    </header>

  );
}