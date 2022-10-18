
import styles from './Header.module.css'

import { Rocket } from 'phosphor-react'

export function Header(){
    return(
        <header className={styles.taskHeader}>
            <Rocket size={36} color='var(--Blue)'/>
            <p className={styles.logo}>to<span className={styles.logoDo}>do</span></p>
        </header>
    )
}