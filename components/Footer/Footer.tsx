import Image from "next/image"
import styles from "./Footer.module.scss"
import Logo from "@/public/logo.svg"


const Footer = () => {

return (
    <footer className={styles.footer}>
    <Image src={Logo} alt="Logo" height={100} width={100} />
    <p className={styles.footer__text}>Get 40% off on your first order by signing up FOR OUR NEWSLETTER now!</p>
    </footer>
)
}

export default Footer