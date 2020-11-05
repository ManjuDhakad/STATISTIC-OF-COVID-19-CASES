import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';


// export { default as Cards }
// from './Cards/Cards';
// export { default as Chart }
// from './Chart/Chart';
// export { default as CountryPicker }
// from './CountryPicker/CountryPicker';

// creating virtual dom using react and react-dom module which make speed and perfomance batter of the application.....

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);

// what babel indirectly do (mean bable convert above code to this..)........................
// ReactDOM.render(React.crateElement('h1'
// ,null ,
// "Next Child element to create"),
// document.getElementByID("root"));


// how we make dom in js mean how we create the element in js and show in html dom 
// var h1 = document.createElement('h1');
// h1.innerHTML = "Manju Dhakad";
// document.getElementById("root").appendChild(h1);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();