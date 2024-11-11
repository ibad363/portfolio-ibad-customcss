import React from "react";
import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14478.981667936244!2d67.19999716977537!3d24.893431199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c1f22df5555%3A0x27f12e1d84f4d92e!2sMalir%20Kala%20Board%2C%20Malir%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710871234567!5m2!1sen!2s"
          className={styles.map}
          loading="lazy"
        ></iframe>

        <div className={styles.addressOverlay}>
          <div className={styles.addressItem}>
            <h3 className={styles.addressLabel}>ADDRESS</h3>
            <p className={styles.addressText}>Malir Kalaboard, Karachi, Pakistan</p>
          </div>
          <div className={styles.addressItem}>
            <h3 className={styles.addressLabel}>EMAIL</h3>
            <p className={styles.addressText}>hafizibadurrehman363@gmail.com</p>
          </div>
          <div className={styles.addressItem}>
            <h3 className={styles.addressLabel}>PHONE</h3>
            <p className={styles.addressText}>03171289624</p>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.underline}></div>
        <p className={styles.description}>
          Feel free to reach out. I'd love to hear from you!
        </p>

        <form action="https://formspree.io/f/mkgnbwqn" method="POST">
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input type="text" name="name" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" name="email" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Subject</label>
            <input type="text" name="subject" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea name="message" className={styles.textarea} required></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;