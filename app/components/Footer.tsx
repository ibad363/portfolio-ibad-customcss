import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span className={styles.brandText}>
                        Ibad Ur Rehman
                    </span>
                </div>
                
                <p className={styles.copyright}>
                    © 2024 Ibad Ur Rehman
                </p>
                
                <div className={styles.socialLinks}>
                    <Link 
                        href="https://www.linkedin.com/in/ibad-ur-rehman-developer/"
                        target="_blank"
                        className={styles.socialLink}
                    >
                        <FaLinkedin className={styles.socialIcon} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer