import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/home">
          Home
        </MenuLink>

        <MenuLink to="/aboutme">
          About me
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu