/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './socialMedia.css';

function SocialMedia() {
    return (
        <footer className="socialMedia">
            <p>Feito por Daniela Caus | 2021 </p>
            <address>
                <a className="fab fa-linkedin" href="https://www.linkedin.com/in/danielacaus/" target="_blank" rel="noreferrer"></a>
                <a className="fab fa-github-square" href="https://github.com/danicaus" target="_blank" rel="noreferrer"></a>
            </address>
        </footer>
    )
};

export default SocialMedia;