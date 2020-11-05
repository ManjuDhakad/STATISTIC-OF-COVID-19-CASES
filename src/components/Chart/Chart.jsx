import React , {useState , useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from "react-chartjs-2";
import {Container} from 'react-bootstrap';

import styles from './Chart.module.css';

const Chart =({data, country , graph }) =>{
    // console.log(data);

    const [dailyData , setDailyData] = useState([]);

    useEffect(() => {
        try{
        const fetchAPI =async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }catch(err){
        setDailyData([]);
        // console.log(dailyData);
    }
    }, []);
        
    
    if(country){
        let n = data.length;
        // console.log (data[n - 1].Confirmed);

        var confirmed = data[n - 1].Confirmed;
        var recovered = data[n - 1].Recovered;
        var deaths = data[n - 1].Deaths;
        var lastUpdate = data[n - 1].Date;

    }

    // console.log(confirmed , recovered , deaths , lastUpdate, country , graph );

    const lineChart = (
        dailyData  //if array is empty it will be zero...
        ?(
        <Line data={{
            labels:dailyData.map(({ date }) => date),
            datasets:[{
                data : dailyData.map(({ confirmed }) => confirmed),
                label : 'Infected ',
                borderColor : 'rgba(234, 248, 33, 0.897)',
                // fill : true,

            },{
                data : dailyData.map(({ deaths }) => deaths),
                label : 'Deaths',
                borderColor : 'rgba(247, 12, 12, 0.959)',
                
                // fill : true,
            }],
        }} 
        />) : (<div> Something Went Wrong Refresh Again!</div>)
    );

    // console.log(confirmed , recovered , deaths , lastUpdate);

    const barChart = (
        confirmed
        ?(
            <Bar 
            data ={{
                labels : ['Infected' ,'Recovered' ,'Deaths'],
                datasets : [{
                    label : 'People', 

                    backgroundColor:[
                        ' rgba(220, 231, 68, 0.5)',
                        ' rgba(15, 197, 15, 0.5)',
                        ' rgba(226, 10, 10, 0.5)',
                    ],
                    hoverBackgroundColor:[
                        'rgba(234, 248, 33, 0.993)',
                        'rgba(20, 241, 20, 0.959)',
                        'rgba(247, 12, 12, 0.959)',
                ],
                    data : [confirmed ,recovered , deaths]
                }]
            }}
            options = {{
                // legend : {display : false},
                title :{display:true , text : `Current status in ${country}` }
            }}
            />

        ):null
    )

const calculatePercentage = (list) => {
    let result = [];
    let n = list.length;
    for(let i = 1; i <n  ; i++){
        let value = ( (list[i] - list[i-1]) /list[i] )*100;
        result[i-1] = value;
    }
    return result; 
}

   const percentageChart  = (
       graph ? 
    (<Line data={{
        labels: data.map(( dateItem ) => new Date(dateItem.Date).toLocaleDateString()),
        datasets:[{
            data : calculatePercentage(data.map(( confirmedItem ) => confirmedItem.Confirmed) ),
            label : 'Infected ',
            borderColor : 'rgba(234, 248, 33, 0.897)',
            fill : true,

        },{
            data : calculatePercentage(data.map(( recoveredItem ) => recoveredItem.Recovered)),
            label : 'Recovered ',
            borderColor : 'rgba(20, 241, 20, 0.959)',
            fill : true,
        },{
            data : calculatePercentage(data.map(( deathsItem ) => deathsItem.Deaths)),
            label : 'Deaths ',
            borderColor : 'rgba(247, 12, 12, 0.959)',
            fill : true,
        }],
    }} 
    />):null
   )

   const recoveryChart  = (
    graph ? 
    (
        <Line data = {{
            labels: data.map(( dateItem ) => new Date(dateItem.Date).toLocaleDateString()),
            datasets:[{
                data : data.map(( recoveredItem ) => recoveredItem.Recovered ),
                label : 'Recovered Growth',
                borderColor : 'rgba(20, 241, 20, 0.959)',
            },],
        }} 
 />):null
)

const logChart  = (
    graph ? 
    (
        <Line data={{
            labels: data.map(( dateItem ) => new Date(dateItem.Date).toLocaleDateString()),
            datasets:[{
                data : data.map(( confirmedItem ) => Math.log(confirmedItem.Confirmed)),
                label : 'Infected',
                borderColor : 'rgba(234, 248, 33, 0.897)',

            },{
                data : data.map(( recoveredItem ) => Math.log(recoveredItem.Recovered) ),
                label : 'Recovered',
                borderColor : 'rgba(20, 241, 20, 0.959)',
            },{
                data : data.map(( deathsItem ) => Math.log(deathsItem.Deaths) ),
                label : 'Deaths',
                borderColor : 'rgba(247, 12, 12, 0.959)',
            }],
        }} 
 />):null
)


function doublingRateData(dataItem)
{
    let n = dataItem.length;
    console.log(n);
    let result =[];
    for(let i=0; i<n; i++)
    { 	
        let low=i;
        let high=n-1;
        let temp = (dataItem[i])*2;
        // console.log("Preveous case" + data[i].Confirmed);
        while(low <= high)
        {

            let mid = Math.floor((low + high)/2);
            let search = dataItem[mid]
            
            if(temp == search || ((temp < search) && (temp > dataItem[mid-1]) ))
            {
                result.push(mid-i);

                // console.log(data[i].Confirmed);
                // console.log("Double of preveous case is " + search);
                // console.log(data[mid].Date);
                break;
            }
            else if(temp > dataItem[mid])
            {
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
    }
    // console.log("result of doubling rate cases " + result);
    // console.log(result);
    return result;
}


const doublingRateChart  = (
    
    graph ? 
    (
        <Line data={{
            labels: data.map(( dateItem ) => new Date(dateItem.Date).toLocaleDateString()),
            // labels: DoublingRateDate( doublingRateData()).map((dateItem) => new Date(dateItem).toLocaleDateString()),
            // labels: doublingRateData(),
            datasets:[{
                data : doublingRateData(data.map((confirmedItem) => confirmedItem.Confirmed) ), 
                label : 'Infected',
                borderColor : 'rgba(234, 248, 33, 0.897)',
                // fill : true,

            },
            {
                data : doublingRateData( data.map(( recoveredItem ) => recoveredItem.Recovered)),
                label : 'Recovered',
                borderColor : 'rgba(20, 241, 20, 0.959)',
                
                // fill : true,
            },{
                data : doublingRateData( data.map(( deathsItem ) => deathsItem.Deaths) ),
                label : 'Deaths',
                borderColor : 'rgba(247, 12, 12, 0.959)',
                
                // fill : true,
            }
        ],
        }} 
 />):null
)

function graphReDrowing(temp)
{
let res ="" ;
switch (graph) {
    case '1':
        res = percentageChart;
        break;
    case '2':
        res = recoveryChart;
        break;
    case '3':
        res = logChart;
        break;
    case '4':
        res = doublingRateChart;
        break;
    default :;
}
// console.log(res);
return res;
}

    return (
        <>
            {
                (graph && country)?
                (
                    <Container fluid className = {styles.container}>
                        <div className = {styles.grid_container}>
                    {graphReDrowing(graph)}
                    </div>
                </Container>
                ):
                (
                <Container fluid className = {styles.container}>
                    <div className = {styles.grid_container}>
                    {country ? barChart : lineChart}
                    </div>
                </Container>
            ) 
            }
        </>
    )
}
export default Chart;