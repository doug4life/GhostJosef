import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/Screenshot 2022-01-05 at 12.42.17 PM.png" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
