import styles from "./page.module.css"
import Copybtn from "./copybtn/Copybtn"

const page = () => {
    return (
        <div className={styles.container}>
            <h1>Contact us</h1>
            <h2>St.Joseph&apos;s home for the aged</h2>
            <p>Grace and Compassion, Benedictine Society<br />Mulakulam North P.O, Palachuvadu Piravom Ernakulam,Kerala 686 664</p>
            <div>
                <p>Mob : 8592821107</p>
                <Copybtn />
            </div>
        </div>
    )
}

export default page