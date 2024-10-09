import styles from "./page.module.css"
import Card from "./card/Card";

const page = () => {
    const facilities = [
        "Wholesome and nutritious food",
        "Potable water",
        "Laundry service",
        "Supply of hot water for bathing",
        "Excellent hygiene and cleanliness",
        "Entertainment facilities",
        "Library and reading room",
        "Landscapes, gardens, and walkways",
        "Outings",
        "Special features",
        "Prayer room / Monday to Sunday services conducted regularly",
        "Guest accommodation",
        "A nurse sister to take care of the immediate health needs of the residents",
        "Round-the-clock service by a dedicated team of sisters and staff"
    ];

    return (
        <div className={styles.wrapper}>
            <h2>Our facilities</h2>
            <div className={styles.container}>
                {facilities.map(e => <Card text={e} />)}
            </div>
        </div>
    )
}

export default page