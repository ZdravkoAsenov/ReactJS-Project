import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../../paths';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1>404 - Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to={Path.Home}>
            Go back to homepage
            </Link>
        </div>
    );
};

export default NotFound;
