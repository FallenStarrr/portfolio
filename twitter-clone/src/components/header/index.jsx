import styles from './styles.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.root}>
            <Link to="/" style={{textDecoration: 'none'}}>
                 <h1 className='{styles.logo}'>Github tweet</h1>
            </Link>
        </header>
    )
}

export default Header