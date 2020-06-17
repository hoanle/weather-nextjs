import styles from './HomeComponent.module.css'
import { Container } from 'react-bootstrap';
import CustomNav from './CustomNav/CustomNav';

const HomePageComponent = (props) => {
    return (<Container className={styles.div}>
        <CustomNav />
        <Container className={styles.root}>
            {
                props.forecast != null ?
                    <div className={`${styles.mainContent} ${styles.marginTop}`}>
                        <div className={`${styles.cityName} ${styles.marginTop}`}>{props.city}</div>
                        <div className={`${styles.temperature} ${styles.marginTop}`} >{props.forecast.main.temp}</div>
                        <div className={`${styles.description}`} >{props.forecast.weather[0].main} : {props.forecast.weather[0].description}</div>
                    </div>
                    : <div></div>
            }
            {
                (props.city) === "" ? <p className={`${styles.greeting} ${styles.marginTop} `}>{props.greeting}</p> : <p></p>
            }
        </Container>
    </Container>)
}

export default HomePageComponent