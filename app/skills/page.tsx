import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import styles from '../styles/skills.module.css';

const Skills = () => {
  return(
    <div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.subtitle}>EXPERTISE</h2>
            <h1 className={styles.title}>Technical Skills</h1>
            <div className={styles.underline}></div>
          </div>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>HTML</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '90%'}}></div>
                </div>
                <p className={styles.percentage}>90%</p>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>CSS</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '60%'}}></div>
                </div>
                <p className={styles.percentage}>60%</p>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>JavaScript/TypeScript</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '75%'}}></div>
                </div>
                <p className={styles.percentage}>75%</p>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>NEXT JS</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '60%'}}></div>
                </div>
                <p className={styles.percentage}>60%</p>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>React</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '50%'}}></div>
                </div>
                <p className={styles.percentage}>50%</p>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <IoIosCheckboxOutline className={styles.icon}/>
                </div>
                <h2 className={styles.skillName}>Figma</h2>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{width: '50%'}}></div>
                </div>
                <p className={styles.percentage}>50%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;