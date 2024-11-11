import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/projects.module.css';

const Projects = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.subtitle}>PORTFOLIO</h2>
            <h1 className={styles.title}>Featured Projects</h1>
            <div className={styles.underline}></div>
            <p className={styles.description}>
              With expertise in modern web technologies, I've developed various projects 
              showcasing responsive design, user interaction, and clean code practices.
              Each project demonstrates my commitment to creating engaging web experiences.
            </p>
          </div>

          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={300}
                  height={300}
                  alt="CarWebsite"
                  src={"/assets/pakwheels.png"}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div>
                    <h2 className={styles.projectTitle}>
                      Car-Selling Website (PakWheels - Mini Hackathon)
                    </h2>
                    <p className={styles.projectDescription}>
                      A modern car selling platform built with Next.js and Tailwind CSS, 
                      featuring responsive design and interactive user interface.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://pakwheels-ibad.vercel.app/"
                    className={styles.projectLink}
                  >
                    View Project
                    <svg className={styles.arrow} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={300}
                  height={300}
                  alt="Resume"
                  src={"/assets/static-resume.png"}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div>
                    <h2 className={styles.projectTitle}>
                      Static Interactive Resume
                    </h2>
                    <p className={styles.projectDescription}>
                      An interactive resume built using HTML, CSS, and TypeScript, 
                      showcasing professional experience and skills in an engaging way.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://hackathon-ibad.vercel.app/milestone1-2/index.html"
                    className={styles.projectLink}
                  >
                    View Project
                    <svg className={styles.arrow} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={300}
                  height={300}
                  alt="PortfolioInterface"
                  src={"/assets/resume-builder.png"}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div>
                    <h2 className={styles.projectTitle}>
                      Shareable Resume Builder
                    </h2>
                    <p className={styles.projectDescription}>
                      A dynamic resume builder application created with HTML, CSS & TypeScript, 
                      allowing users to create and share professional resumes.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://resume-builder-ibad.vercel.app/"
                    className={styles.projectLink}
                  >
                    View Project
                    <svg className={styles.arrow} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;