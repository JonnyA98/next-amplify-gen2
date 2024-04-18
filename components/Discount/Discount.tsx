import styles from "./Discount.module.scss"

const Discount = () => {

    return (<div className={styles.discount}>

        <p className={styles.discount__offer}>Limited time offer for new customers!<br className={styles.discount__break}/> Get 40% off week 1 and 15% off 2nd & 3rd </p>
    </div>)
}


export default Discount