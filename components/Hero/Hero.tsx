import Image from "next/image";
import styles from "./Hero.module.scss"
import LinkButton from "../LinkButton/LinkButton";
import HeroImage from "@/public/hero-image.svg"


const Hero = () => {

return(

    <section className={styles.hero}>
        <div className={styles.hero__text}>
        <h1 className={styles.hero__heading}>Healthy food <br className={styles.hero__br1}/> delivery<br className={styles.hero__br2}/> - <br className={styles.hero__br2}/>weekly!</h1>
        <p className={styles.hero__copy}>Hey, London! We are here to make your life easier. So that you can finally start living tastier. Avail <span className={styles.hero__discount}>40% OFF</span> on your first order!</p>
        <LinkButton text="Choose a meal Plan" url="/menu"/>
        </div>
        <Image layout="responsive"  src={HeroImage} alt="Picture of delicious food" height={250} width={250}/>
    </section>
)

}

export default Hero