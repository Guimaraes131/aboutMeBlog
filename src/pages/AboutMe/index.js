import PostModel from "components/PostModel"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./AboutMe.module.css"
import profilePicture from 'assets/perfil.jpg'

const AboutMe = () => {
  return (
    <PostModel fotoCapa={fotoCapa} title="About me">

      <h3 className={styles.subtitle}>Hi, I am Guimarães131</h3>
      <img src={profilePicture} alt="Guimarães131 picture" className={styles.photoAboutMe}/>

    </PostModel>
  )
}

export default AboutMe