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
    'Avg tool life': [
      'rgba(153, 0, 255, 0.4)',
    ],
    'Tool life': [
      'rgba(153, 255, 255, 0.4)',
    ],
    'Reached End of life':
    [
      'rgba(0, 255, 255, 0.4)',
    ],
    'Change Over':
    [
      'rgba(153, 255, 0, 0.4)',
    ],
    'Tool Broken':
    [
      'rgba(153, 0, 255, 0.4)',
    ],
    'Other':
    [
      'rgba(255, 255, 160, 0.4)',
    ],
  }
  let chartBarData = {}

  if (chartData !== '') {
    datasets = [];
    chartLabels = [];
    if (props.graphData === 'Avg Tool Life') {
      chartBarData = { 'Avg tool life': [], 'Tool Life': [] }
      for (let i in chartData) {
        chartLabels.push(chartData[i].tool_number);
        chartBarData['Avg tool life'].push(chartData[i].avg_tool_life);
        chartBarData['Tool Life'].push(chartData[i].tool_life);
      };

    }
    else if (props.graphData === 'Tool Order History') {
      chartBarData = {};
      chartLabels = chartData.map(x => x.tool_number);
      chartLabels = [...new Set(chartLabels)];

      let reasons = chartData.map(x => x.reason);
      reasons = [...new Set(reasons)];
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
            'rgba(153, 102, 255, 1)',
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
      <div className='header'>
        <h3 className='title'>{props.graphData} - Monthly</h3>
      </div>
      {chartData !== '' ? <Bar data={data} options={options} /> : null}
    </div>
  );
}

export default Chart;