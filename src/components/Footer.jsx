import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <div className="footer">
            <a><Link to="/">&#8592; voltar ao início</Link></a>
        </div>
        </>
    )
}

export default Footer;
