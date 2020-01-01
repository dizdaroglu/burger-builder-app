import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css'

import NavigationItems from '../NavigationItems/NavigationsItems';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;