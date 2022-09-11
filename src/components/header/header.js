import React from 'react';

import './header.css';
import '../server-info'
import ServerInfo from '../server-info';

const Header = () => {
    return (
        <div className="header">
            <h3>
                <a href="#">
                    DreamSMP
                </a>
            </h3>
            <ServerInfo/>
            <ul className="">
                <li>
                    <a href="#">DreamSMP Members</a>
                </li>
                <li>
                    <a href="#">DreamSMP Timeline</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
