"use client";


import Link from "next/link";
import styles from "./LinkButton.module.scss"

interface LinkButton{
    text: string;
    url: string;
}

const LinkButton = ({text, url} : LinkButton) => {

    return(<div className={styles.linkbutton}><Link href={url}>{text}</Link></div>)
}

export default LinkButton