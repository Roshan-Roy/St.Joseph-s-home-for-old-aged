"use client"

import Links from "./links/Links"
import styles from "./navbar.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"

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
    const [shown, setShown] = useState(false)
    const toggleShown = () => {
        setShown(e => !e)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h3>St.Joseph&apos;s</h3>
                        <p>Home for aged</p>
                    </div>
                    <div className={styles.btns} onClick={toggleShown}>
                        {shown ? <IoMdClose className={styles.close} /> : <GiHamburgerMenu className={styles.ham} />}
                    </div>
                    <div className={shown ? `${styles.links} ${styles.shown}` : styles.links}>
                        {links.map((e, i) => <Links key={`${e} ${i}`} name={e.name} path={e.path} func={toggleShown} />)}
                    </div>
                </div>
            </div >
            <div className={styles.drop}></div>
        </>
    )
}

export default Navbar