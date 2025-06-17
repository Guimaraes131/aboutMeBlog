import PostModel from "components/PostModel"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./AboutMe.module.css"
import profilePicture from 'assets/perfil.jpg'

const AboutMe = () => {
  return (
    <PostModel fotoCapa={fotoCapa} title="About me">

      <h3 className={styles.subtitle}>Hi, I am Guimarães131</h3>
      <img src={profilePicture} alt="Guimarães131 picture" className={styles.photoAboutMe}/>

      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ornare dolor. In vehicula, arcu at elementum rhoncus, nulla libero gravida risus, sed pharetra ex lorem non mauris. Aenean quam turpis, lacinia a auctor nec, commodo elementum lacus. Donec eget ligula at lectus dictum elementum. In aliquet sollicitudin enim mollis bibendum. In pulvinar odio sit amet sem vulputate, ac faucibus justo commodo. Phasellus ac risus imperdiet, malesuada diam ac, convallis felis. Donec gravida et nulla pretium finibus.
      </p>

      <p className={styles.paragraph}>
         Cras nisl nunc, gravida eu tincidunt ac, euismod et urna. Pellentesque sed lectus et felis fermentum scelerisque. Donec eu velit erat. Mauris lectus est, rhoncus semper massa vel, facilisis venenatis elit. Sed id mauris varius, euismod neque a, laoreet urna. Sed cursus quam at tincidunt commodo. Pellentesque placerat odio leo. Nulla odio est, consectetur vel dolor id, laoreet tristique eros. Suspendisse sed tortor ante. Sed non porttitor dolor, eget lacinia ipsum. Suspendisse ornare luctus fermentum. Praesent nec turpis libero. Pellentesque ac ante sit amet leo ornare dignissim. Integer vestibulum dui sit amet neque consectetur, et ornare sapien volutpat.
      </p>

      <p className={styles.paragraph}>
         Suspendisse laoreet, erat vel aliquam accumsan, est urna imperdiet diam, non tincidunt arcu turpis at erat. Proin mattis enim nisl, ut feugiat felis suscipit nec. Duis fermentum mi augue, venenatis dapibus eros lacinia vel. Nulla urna risus, rhoncus quis quam sit amet, vestibulum fermentum nisi. Donec dapibus libero a lectus tempus mollis. Morbi a facilisis tortor, at scelerisque ex. Proin quis massa eget libero tempor sollicitudin. Proin sit amet libero sed turpis interdum lobortis.
      </p>

      <p className={styles.paragraph}>
         Etiam non mauris a velit egestas ullamcorper. Morbi rhoncus lacus orci, ut condimentum eros imperdiet a. Donec mauris orci, congue in tristique eget, malesuada et urna. Nam vel imperdiet sem. Nullam cursus urna nulla, euismod tempus sapien mattis ut. Fusce sit amet malesuada enim, eget rutrum nunc. Donec id libero vitae lectus lacinia tincidunt. Quisque luctus nisl sit amet enim dictum, sit amet semper mi tincidunt. Ut viverra eros consequat, dictum massa vel, tempus neque. Nunc placerat risus vitae cursus venenatis. Praesent ultricies est et lacus tempor, et viverra diam tincidunt.
      </p>

      <p className={styles.paragraph}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed felis odio. Mauris auctor lacus posuere nisl rutrum, ac porttitor massa dictum. Vestibulum vulputate placerat enim at sollicitudin. Duis quam ligula, euismod sit amet lorem a, mattis ornare ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porttitor vehicula turpis, ac hendrerit sem tincidunt non. Vivamus aliquam elit sed lacinia facilisis. Donec sed erat efficitur, sodales mauris id, dictum ante. Ut interdum elit ligula, id laoreet arcu euismod ut. Vestibulum ut magna lacus. Nullam eleifend ligula nibh, id imperdiet sem pretium vel. Curabitur magna mi, dignissim in interdum a, dignissim et nisi.
      </p>
    </PostModel>
  )
}

export default AboutMe