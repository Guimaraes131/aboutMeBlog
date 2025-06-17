import styles from "./Footer.module.css"
import { ReactComponent as R} from "assets/marca_registrada.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <R/>

      Developed by Guimaraes131.
    </footer>
  )
}

export default Footer