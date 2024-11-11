import React from 'react'
import Link from 'next/link'
import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>
                        Ibad Ur Rehman
                    </span>
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/skills" className={styles.navLink}>Skills</Link>
                    <Link href="/projects" className={styles.navLink}>Projects</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                <Link href="/assets/cv.pdf" className={styles.downloadBtn}>
                    Download CV <AiOutlineCloudDownload />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
