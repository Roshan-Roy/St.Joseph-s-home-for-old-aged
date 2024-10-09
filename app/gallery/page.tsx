import styles from "./page.module.css"

const page = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Our gallery</h2>
            <div className={styles.container}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
                <div className={styles.four}></div>
                <div className={styles.five}></div>
                <div className={styles.six}></div>
                <div className={styles.seven}></div>
            </div>
        </div>
    )
}

export default page