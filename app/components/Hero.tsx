"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '../styles/hero.module.css'

const Hero = () => {
    const router = useRouter();

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hello, I'm</p>
                    <h1 className={styles.title}>
                        Ibad Ur Rehman
                        <br />
                        <span className={styles.highlight}>
                            Frontend Developer
                        </span>
                    </h1>
                    <p className={styles.description}>
                        Passionate Frontend Developer with expertise in modern web technologies. 
                        Specializing in creating responsive, user-friendly applications with 
                        clean and efficient code. Committed to delivering innovative solutions 
                        that make a real impact.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button 
                            onClick={() => router.push('/projects')}
                            className={styles.primaryBtn}
                        >
                            My Projects
                        </button>
                        <button 
                            onClick={() => router.push('/contact')}
                            className={styles.secondaryBtn}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero