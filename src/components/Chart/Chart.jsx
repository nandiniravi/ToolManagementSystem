import React from 'react';
import {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
// import chartData from '../constants';
import './Chart.scss';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const Chart = (props) => {
  const [chartData, setChartData] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const chartLabels = [];
  const chartToolData = [];
  let i;

  useEffect(() => {
    setShowLoader(true);
        async function fetchData(){
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetReports',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({reportType: props.reportType})
                });
                const json = await response.json();
                // console.log(json.data);
                if(json.ResponseCode === 0 && json.data.length > 0){
                    setShowLoader(false);
                    setChartData(json.data);
                }
                else{
                    setShowLoader(false);
                    setShowError(true);
                    // throw new Error('No data found');
                }
            };
            fetchData();
        },[]); 

    console.log(chartData);


    if(props.graphData === 'Avg Tool Life'){       
        for(i in chartData){
            chartLabels.push(chartData[i].tool_number);
            chartToolData.push(chartData[i].avg_tool_life);
        };
    }
    else if(props.graphData === 'Tool Order History'){
        for(let i in chartData){
            chartLabels.push(chartData[i].tool_number);
            chartToolData.push(chartData[i].noOfOrders);
        };
    }

    console.log(chartLabels);
    console.log(chartToolData);
const data = {
    labels: chartLabels,
    datasets: [
      {
        label: props.graphData,
        data: chartToolData,
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.4)',
          // 'rgba(54, 162, 235, 0.4)',
          // 'rgba(255, 206, 86, 0.4)',
          // 'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          // 'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          // 'rgba(255, 99, 132, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


    return(
        <div style={{textAlign: "center"}}>
            {showLoader ? <Loader></Loader> : null}
            {showError
            ? <ErrorMessage message='No data found!'></ErrorMessage>
            : null}
            <div className='header'>
                <h3 className='title'>{props.graphData} - Monthly</h3>
            </div>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default Chart;