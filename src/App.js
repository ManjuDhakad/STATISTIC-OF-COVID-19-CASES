import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    // best place to fetch api data inside component is componentDidMaount
    //for make async componentDidMount to place async in front of function..
    // we pass the data here and destructing the data into cards component.//
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
        // console.log(fetchedData);
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        // console.log(country);
        // console.log(fetchedData)
        this.setState({ data: fetchedData, country: country });
        // fetch data 
        // set the event on country choosen...
    }
    render() {
        const { data, country } = this.state;

        return ( <
            div className = { styles.container } >
            <
            img className = { styles.image }
            src = { coronaImage }
            alt = "COVID-19" / >
            <
            Cards data = { data }
            / ><
            CountryPicker handleCountryChange = { this.handleCountryChange }
            / > <
            Chart data = { data }
            country = { country }
            / >  < /
            div >
        );
    }
}
export default App;