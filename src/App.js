import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';


import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import { fetchData, fetchCountryData } from './api';
import coronaImage from './images/image.png';
import IconImage from './images/icon.jpg';
import {OverlayTrigger , Popover, Tooltip} from 'react-bootstrap'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ShowAccount from './components/Account/showAccount';
// import Popup from 'reactjs-popup';

// import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
    state = {
        data: {},
        country: '',
        graph: '',
        account : false,

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

    handleGraphChange = (graph) => {
        this.setState({ graph: graph });
    }
    
    setAccount =()=>{this.setState({account : !(this.state.account)})}

    render() {
        const { data, country, graph , show} = this.state;

        console.log( data, country, graph , show);
        return ( <
            div className = { styles.container } >
                <
                div className = { styles.Icon_div } >
                    
                    
                <img className = { styles.icon } src = { IconImage } onClick = {this.setAccount} / >
                {this.state.account ? <ShowAccount/> : null}                 
                <
                    img className = { styles.image }
                    src = { coronaImage }
                    alt = "COVID-19" / >
                <
                /div>
                <
                Cards data = { data }
                / ><
                CountryPicker handleCountryChange = { this.handleCountryChange }
                handleGraphChange = { this.handleGraphChange }
                / > <
                Chart data = { data }
                country = { country }
                graph = { graph }
                / >  

            <
            /div > 
        );
    }
}
export default App;