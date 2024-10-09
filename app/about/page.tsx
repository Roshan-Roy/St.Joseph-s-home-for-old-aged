import styles from "./page.module.css"

const page = () => {
    return (
        <div className={styles.wrapper}>
            <h2>About us</h2>
            <div className={styles.child}>
                <div className={styles.one}><p>St. Joseph's Home for the Aged is an organization managed by the sisters of Our Lady of Grace and Compassion. It is a Registered Society known as "Grace and Compassion Benedictine Society." The Home provides a loving and homely atmosphere to those who are on the 'sunset' of their life. This home is an outcome of the inspiration drawn from the motto of the congregation "Prayer and Work."</p></div>
                <div className={styles.about_one}></div>
            </div>
            <div className={`${styles.child} ${styles.rev}`}>
                <div className={styles.one}><p> It is a home to live in peace and serenity and its homely atmosphere reduces the boredom of old age. It envisages a congenial atmosphere for elderly people to live a tension-free, healthy, and carefree life with basic support and care.</p></div>
                <div className={styles.about_two}></div>
            </div>
            <div className={styles.child}>
                <div className={styles.one}><p>St. Joseph's Home is a model of geriatric-friendly living, offering exceptional services within a vibrant community. Our dedicated and well-trained staff ensures each resident receives the care they deserve. Nestled in a lush, spacious campus, our residents can enjoy the tranquility of nature. Our culinary team takes pride in serving diverse, healthy cuisine in communal dining areas.</p></div>
                <div className={styles.about_three}></div>
            </div>
            <div className={`${styles.child} ${styles.rev}`}>
                <div className={styles.one}><p>We encourage camaraderie among residents through recreational activities. Daily programs cater to both physical and mental well-being, enhancing residents' lives. The most cherished aspect is our liberating atmosphere, where every resident can feel truly at home and cherished.</p></div>
                <div className={styles.about_four}></div>
            </div>
        </div>
    )
}

export default page