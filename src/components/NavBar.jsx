import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="navbar-goback-arrow">
        <Link to="/">&#8592;</Link>
        {/* se estiver na pagina inicial não aparece a flechinha de voltar, no resto aparece */}
      </div>
      <div className="navbar-links">
        <Link to="/about">sobre mim</Link>
        <Link to="/projects">projetos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
