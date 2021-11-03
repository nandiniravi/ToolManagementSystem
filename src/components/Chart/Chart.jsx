import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartData from '../constants';
import './Chart.scss';


const Chart = (props) => {
    const chartLabels = [];
    const chartToolData = [];
    let i;
    if(props.graphData === 'Avg Tool Life'){       
        for(i in chartData.toolLifeData){
            chartLabels.push(chartData.toolLifeData[i].toolName);
            chartToolData.push(chartData.toolLifeData[i].avgLife);
        };
    }
    else if(props.graphData === 'Tool Order History'){
        for(let i in chartData.toolOrderHistory){
            chartLabels.push(chartData.toolOrderHistory[i].toolName);
            chartToolData.push(chartData.toolOrderHistory[i].noOfOrders);
        };
    }
const data = {
    labels: chartLabels,
    datasets: [
      {
        label: props.graphData,
        data: chartToolData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
            beginAtZero: false,
          },
        },
      ],
    },
  };


    return(
        <div style={{textAlign: "center"}}>
            <div className='header'>
                <h3 className='title'>{props.graphData} - Monthly</h3>
            </div>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default Chart;