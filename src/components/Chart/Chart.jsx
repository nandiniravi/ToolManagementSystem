import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
// import chartData from '../constants';
import './Chart.scss';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
let datasets = [];


const Chart = (props) => {
  const [chartData, setChartData] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  let chartLabels = [];

  useEffect(async () => {
    setShowLoader(true);
    async function fetchData() {
      const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetReports',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ reportType: props.reportType })
        });
      const json = await response.json();
      // console.log(json.data);
      if (json.ResponseCode === 0 && json.data.length > 0) {
        setShowLoader(false);
        setChartData(json.data);
      }
      else {
        setShowLoader(false);
        setShowError(true);
        // throw new Error('No data found');
      }
    };
    await fetchData();
  }, []);
  let bgcolor = {
    'Average Actual tool life': [
      'rgba(153, 0, 255, 0.4)',
    ],
    'Expected Tool Life': [
      'rgba(153, 255, 255, 0.6)',
    ],
    'End of Life':
      [
        'rgba(50, 255, 0, 0.4)',
      ],
    'Change Over':
      [
        'rgba(0, 255, 255, 0.4)',
      ],
    'Others':
      [
        'rgba(148,148,148, 0.4)',
      ],
    'Tool Broken':
      [
        'rgba(255,148,148, 0.4)',
      ],
  }

  let borderColors = {
    'Average Actual tool life': [
      'rgba(153, 0, 255,1)',
    ],
    'Expected Tool Life': [
      'rgba(153, 255, 255,1)',
    ],
    'End of Life':
      [
        'rgba(50, 255, 0,1)',
      ],
    'Change Over':
      [
        'rgba(0, 255, 255,1)',
      ],
    'Others':
      [
        'rgba(148,148,148,1)',
      ],
    'Tool Broken':
      [
        'rgba(255,148,148,1)',
      ],
  }
  let chartBarData = {}

  if (chartData !== '') {
    datasets = [];
    chartLabels = [];
    if (props.graphData === 'Tool Life Tracking') {
      chartBarData = { 'Average Actual tool life': [], 'Expected Tool Life': [] }
      for (let i in chartData) {
        chartLabels.push(chartData[i].tool_number);
        chartBarData['Average Actual tool life'].push(chartData[i].avg_tool_life);
        chartBarData['Expected Tool Life'].push(chartData[i].tool_life);
      };

    }
    else if (props.graphData === 'Tool Change Reasons') {
      chartBarData = {};
      chartLabels = chartData.map(x => x.tool_number);
      chartLabels = [...new Set(chartLabels)];

      let reasons = chartData.map(x => x.reason);
      reasons = ['End of Life', 'Change Over', 'Tool Broken', 'Others'];
      for (let reason of reasons) {
        chartBarData[reason] = [];
      }
      for (let label of chartLabels)
        for (let reason of reasons) {
          let filteredData = chartData.filter(x => x.tool_number === label && x.reason === reason);
          let count = filteredData.reduce(function (accumulator, item) {
            return accumulator + item.count;
          }, 0);
          chartBarData[reason].push(count)

        }
    }

    console.log(chartLabels);
    console.log(chartBarData);

    for (let barKey in chartBarData) {
      datasets.push(
        {
          label: barKey,
          data: chartBarData[barKey],
          backgroundColor: bgcolor[barKey],
          borderColor: [
            borderColors[barKey]
          ],
          borderWidth: 1,
        }
      )
    }
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
        },
      ],
    },
  };
  const data = {
    labels: chartLabels,
    datasets: datasets
  };

  return (
    <div style={{ textAlign: "center" }}>
      {showLoader ? <Loader></Loader> : null}
      {showError
        ? <ErrorMessage message='No data found.'></ErrorMessage>
        : null}
      <div className='chart-title'>
        <h3 className='title'>{props.graphData} - Monthly</h3>
      </div>
      {chartData !== '' ? <Bar data={data} options={options} /> : null}
    </div>
  );
}

export default Chart;