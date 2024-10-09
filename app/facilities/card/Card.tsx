import styles from "./card.module.css"

const Card = ({ text }: { text: string }) => {
    return (
        <div className={styles.container}>{text}</div>
    )
}

export default Card