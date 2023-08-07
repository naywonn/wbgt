import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import AccuracyScore from './DashboardComponents/AccuracyScore';
import HistogramChart from './DashboardComponents/HistogramChart';
import LineChart from './DashboardComponents/LineChart';
import MeanSquareError from './DashboardComponents/MeanSquareError';
import WbgtValues from './DashboardComponents/Wbgt';


function Dashboard() {
  const [histogramChartData, setHistogramChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/all_current')
      .then((response) => {
        const data = JSON.parse(response.data);
        // const data = response.data;

        const histogramLabels = data.map((item) => item.station_id);
        const histogramData = data.map((item) => item.WBGT);

        const chartData = {
          labels: histogramLabels,
          datasets: [
            {
              data: histogramData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };

        setHistogramChartData(chartData);
      })
      .catch((error) => {
        console.error('Error fetching API data:', error);
      });
  }, []);

  const lineChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'Line Chart Data',
        data: [29, 30, 27],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };


  return (
    <div>
      <h2>DashBoard Page</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="dashboard-box">
          <MeanSquareError />
        </div>
        <div className="dashboard-box">
          <AccuracyScore />
        </div>
        <div className="dashboard-box">
          <WbgtValues />
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-section">
          <h3>Model Analysis</h3>
          <LineChart lineChartData={lineChartData} />
        </div>
        <div className="chart-section">
          <h3>WBGT Values Chart</h3>
          <HistogramChart histogramChartData={histogramChartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
