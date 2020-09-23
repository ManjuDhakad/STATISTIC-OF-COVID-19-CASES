import React , {useState , useEffect } from 'react';
import {Container , Row, Col} from 'react-bootstrap';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker =( { handleCountryChange } ) =>{
    const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries() );
        }
        fetchAPI();
    }, [setFetchedCountries]);

    // console.log(fetchedCountries);

    return (
        <Container className ={styles.selectControl} >
            <Row xs = {12} className = {styles.row}>
            {/* <Col xs ={12} sm = {6}> */}
            <select onChange = { (e) => handleCountryChange(e.target.value)}>
                <option> Select Country</option>
                <option value = "" > Global </option>
                {fetchedCountries.map( (country , i) => <option key={i} value = {country}> {country}</option> )}
            </select>
            {/* </Col> */}
            {/* <Col xs={12} sm ={6}>
            <select style={{fontFamily: 'oblique'}} onChange = { (e) => console.log(e.target.value)}>
                <option > Select Chart </option>
                <option value = "line" > Line </option>
                <option value = "bar" > Bar </option>
                <option value = "pie" > Pie </option>
                <option value = "Droughnut" > Droughnut </option>
            </select>
            </Col> */}
            </Row>
        </Container>
    )
}
export default CountryPicker;