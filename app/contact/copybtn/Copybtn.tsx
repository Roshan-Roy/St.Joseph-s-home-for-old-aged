"use client"

import { GoCopy } from "react-icons/go"
import styles from "./copybtn.module.css"
import copy from "copy-to-clipboard"
import { useState } from "react"
import { MdOutlineDone } from "react-icons/md";

const Copybtn = () => {
    const [clicked, setClicked] = useState(false)
    return <button onClick={() => {
        copy("8592821107")
        setClicked(true)
    }} className={styles.btn} disabled={clicked}>{clicked ? <MdOutlineDone /> : <GoCopy />}</button>
}

export default Copybtn