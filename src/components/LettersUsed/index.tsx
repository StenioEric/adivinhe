import { Letter } from "../Letter"
import styles from "./style.module.css"


export function LettersUsed () {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras Utilizadas</h5>

            <div>
                <Letter value="R" size="small" color="correct" />
                <Letter value="J" size="small" color="wrong"/>
            </div>
        </div>
    )
}