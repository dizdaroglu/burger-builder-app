import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/logo.png';

const logo = (props) => (
    <div className={styles.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="myBurger" />
    </div>
);


export default logo