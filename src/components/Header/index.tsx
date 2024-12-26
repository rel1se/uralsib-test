import React from "react";
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header>
            <div className={styles.logo}>
                <Link to="/">
                    <img src='/vite.svg' alt="logo"/>
                </Link>
            </div>
            <div className={styles.title}>Uralsib Test Task</div>
        </header>
    )
}

export default Header;