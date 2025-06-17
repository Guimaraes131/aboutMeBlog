import styles from './Banner.module.css'
import circle from 'assets/circulo_colorido.png'
import profile2 from 'assets/perfil2.jpg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hello, World!</h1>

        <p className={styles.paragrafo}>
          Welcome to my personal space! I am Guimarães131, a full stack developer. Here I share some knowledge and hope you learn something new.
        </p>
      </div>

        <div className={styles.imagens}>
          <img
            aria-hidden={true}
            src={circle}
            className={styles.circuloColorido}
          />

          <img
            className={styles.minhaFoto}
            src={profile2}
            alt='Guimarães131 profile picture'
          />
        </div>

    </div>
  )
}

export default Banner