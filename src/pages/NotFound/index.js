import MainButton from "components/MainButton"
import styles from "./NotFound.module.css"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Oops! Page not found.</h1>

        <p className={styles.paragrafo}>
          Are you sure this is what you were looking for?
        </p>
        <p className={styles.paragrafo}>
          Please wait a moment and reload the page, or go back to the homepage.
        </p>

        <div onClick={() => navigate('/home')} className={styles.botaoContainer}>
          <MainButton size="lg">Go back</MainButton>
        </div>

      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  )
}

export default NotFound