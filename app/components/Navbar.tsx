"use client"

import Links from "./links/Links"
import styles from "./navbar.module.css"

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Facilities",
        path: "/facilities"
    },
    {
        name: "Gallery",
        path: "/gallery"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Navbar = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h3>St.Joseph&apos;s</h3>
                        <p>Home for old aged</p>
                    </div>
                    <div className={styles.links}>
                        {links.map((e, i) => <Links key={`${e} ${i}`} name={e.name} path={e.path} />)}
                    </div>
                </div>
            </div>
            <div className={styles.drop}></div>
        </>
    )
}

export default Navbar