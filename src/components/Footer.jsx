import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-goback-link">
            <Link to="/">&#8592; voltar ao início</Link>
            <p>made with &#9825;</p>
        </div>
    )
}

export default Footer;
