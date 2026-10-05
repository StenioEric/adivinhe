import { Letter } from "../Letter"
import styles from "./style.module.css"


export function LettersUsed () {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras Utilizadas</h5>

            <div>
                <Letter value="X" size="small" />
                <Letter value="X" size="small"/>
                <Letter value="X" size="small"/>
            </div>
        </div>
    )
}