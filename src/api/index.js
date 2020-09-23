// File which fetck data from api which we needed 

// axios is used to make api request........
import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        // destructuring data from response object
        // if want to destructuring another data inside data than use {data : {}}
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);


        // here we storing the data into modified object but it not require to store it just
        // need to read and return...
        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate,
        // }
        // return modifiedData;

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        // we want to return data as an object so use () inside map function
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));
        // console.log(data);
        return modifiedData;
    } catch (error) {

    }
}


export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        // console.log(countries);
        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}