import styles from './CustomNav.module.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const CustomNav = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.CustomNavContainer}>
            <Navbar.Brand href="#home">Weather by NextJS</Navbar.Brand>
            <Form action="/" method="get" className={styles.CustomNavForm}>
                <FormControl name="city" type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" type="submit" value="Get Forecast">Search</Button>
            </Form>
        </Navbar>
    )
}

export default CustomNav;