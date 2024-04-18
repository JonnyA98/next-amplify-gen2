"use client";
import Image from "next/image"
import Link from "next/link";
import Logo from "../../public/logo.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import styles from "./Nav.module.scss"
import { usePathname } from 'next/navigation';
import Discount from "../Discount/Discount";
import Stars from "../Stars/Stars";
import LinkButton from "../LinkButton/LinkButton";

const Nav = () => {

    const pathname = usePathname();

    if (pathname.includes("/login")){
        return null
    }

    return(
        <>
        <nav className={styles.nav}>
            <div className={styles.nav__menu}>
                <BurgerMenu/>
            </div>
            <div className={styles.nav__logo}>

            <div>
            <Link href="/">
            <Image alt="logo" src={Logo} />
            </Link>
            </div>

            </div>
            <ul className={styles.nav__links}>
                <li className={styles.nav__link}><Link href="/menu">Menu</Link></li>
                <li className={styles.nav__link}><Link href="/how-to-order">How to Order</Link></li>
                <li className={styles.nav__link}><Link href="/faqs">FAQs</Link></li>
                <li className={styles.nav__link}><Link href="/contact">Contact</Link></li>
                <li className={styles.nav__link}><Link href="/blogs">Blogs</Link></li>

            </ul>
            <LinkButton url="./login" text="Log in"/>
        </nav>
        <Discount/>
        <Stars/>
        </>
    )
}

export default Nav