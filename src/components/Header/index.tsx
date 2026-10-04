import logo from "../../assets/logo.png"
import styles from "./style.module.css"

export function Header () {
    
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" />
        </div>
    )
}