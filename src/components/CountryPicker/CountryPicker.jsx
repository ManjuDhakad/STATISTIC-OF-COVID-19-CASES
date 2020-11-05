import React , {useState , useEffect ,useRef } from 'react';
import {Container , Row, Col} from 'react-bootstrap';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker =(props) =>{
    const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries() );
        }
        fetchAPI();
        
    }, [setFetchedCountries,]);

    // console.log(fetchedCountries);
    // const showText = () => {setIsShow ();}

    return (
        <Container fluid className ={styles.selectControl} >
            <Row xs = {12} className = {styles.row}>
            <Col xs ={12} sm = {6}>
            <select onChange = { (e) => props.handleCountryChange(e.target.value) }>
                <option> Select Country</option>
                <option value = "" > Global </option>
                {fetchedCountries.map( (country , i) => <option key={i} value = {country}> {country}</option> )}
            </select>
            </Col>
            <Col xs={12} sm ={6}>
            <select onClick = {(e)=> props.handleGraphChange(e.target.value)}>
                <option value = ""> Multifarious Graph </option>
                <option value = "1" > Percentage growth </option>
                <option value = "2" > Recovery growth </option>
                <option value = "3" > Log graph </option>
                <option value = "4" > Doubling rate </option>
                
            </select>
            </Col>
            </Row>
        </Container>
    )
}
export default CountryPicker;