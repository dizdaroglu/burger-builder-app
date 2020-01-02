import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css'

import NavigationItems from '../NavigationItems/NavigationsItems';
import DrawerToggle from '../SideDrawer/DrawerToogle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;