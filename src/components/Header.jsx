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

       <a href="#home" onClick={() => setMenu(false)}>Home</a>
      <a href="#about" onClick={() => setMenu(false)}>About</a>
      <a href="#destination" onClick={() => setMenu(false)}>Destination</a>
      <a href="#contact" onClick={() => setMenu(false)}>Contact</a>

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