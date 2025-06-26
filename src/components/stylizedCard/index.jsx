import styles from './styles.module.sass'
import iliaImage from './ilia.jpeg'

const StylizedCard = () => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={iliaImage} alt="Ilia Topuria" />
            <h1 className={styles.title}>Ilia Topuria</h1>
            <p className={styles.description}>Soy un hombre muy honrado, que me gusta lo mejor...</p>
        </div>        
    )
}

export default StylizedCard