"use client";


import Link from "next/link";
import styles from "./LinkButton.module.scss"

interface LinkButton{
    text: string;
    url: string;
}

const LinkButton = ({text, url} : LinkButton) => {

    return(<Link href={url}><div className={styles.linkbutton}>{text}</div></Link>)
}

export default LinkButton