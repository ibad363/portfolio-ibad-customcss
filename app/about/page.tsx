import Image from "next/image";
import React from "react";
import myimage from '../../public/assets/ibad.png';
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <div>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            alt="Ibad Ur Rehman"
                            src={myimage}
                            width={400}
                            height={400}
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>About Me</h1>
                        
                        <div className={styles.underline}></div>

                        <p className={styles.description}>
                            As an Intermediate in Commerce student with a Diploma of Associate Engineering (DAE), I have a unique blend of skills in both commerce and technical fields. This combination allows me to approach challenges with a versatile perspective as I explore potential career opportunities.
                        </p>
                        
                        <p className={styles.description}>
                            Simultaneously, I'm expanding my technical skills through the Governor Sindh Initiative in Applied Cloud Generative AI Engineering (GIAIC). With months of intensive training in modern web technologies like HTML, CSS, JavaScript, and Next.js, I've successfully completed my first quarter. My unique blend of commerce knowledge and technical expertise equips me to create more human-centered digital solutions, bridging the gap between technology and practical, user-focused applications.
                        </p>
                        
                        <a href="/assets/CV-02/ibad-cv.pdf" target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>
                                View CV
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About