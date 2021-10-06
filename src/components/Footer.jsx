import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <div className="footer">
            <p><Link to="/">&#8592; voltar ao início</Link></p>
        </div>
        </>
    )
}

export default Footer;
