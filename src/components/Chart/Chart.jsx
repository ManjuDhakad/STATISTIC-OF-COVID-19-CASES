import React , {useState , useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar ,Pie, Doughnut} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart =({data : {confirmed ,recovered , deaths , lastUpdate}, country }) =>{
    const [dailyData , setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI =async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length  //if array is empty it will be zero...
        ?(
        <Line data={{
            labels:dailyData.map(({ date }) => date),
            datasets:[{
                data : dailyData.map(({ confirmed }) => confirmed),
                label : 'Infected',
                borderColor : 'rgba(234, 248, 33, 0.897)',
                // fill : true,

            },{
                data : dailyData.map(({ deaths }) => deaths),
                label : 'Deaths',
                borderColor : 'rgba(247, 12, 12, 0.959)',
                
                // fill : true,
            }],
        }} 
        />) : null 
    );

    console.log(confirmed , recovered , deaths , lastUpdate);

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
                    data : [confirmed.value ,recovered.value , deaths.value]
                }]
            }}
            options = {{
                // legend : {display : false},
                title :{display:true , text : `Current status in ${country}` }
            }}
            />

        ):null
    )

    return (
        <div className = {styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}
export default Chart;