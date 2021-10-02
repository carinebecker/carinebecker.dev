import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">&#8592;</Link>
      {/* se estiver na pagina inicial não aparece a flechinha de voltar, no resto aparece */}
      <Link to="/about">sobre mim</Link>
      <Link to="/projects">projetos</Link>
    </nav>
  )
}

export default NavBar;
