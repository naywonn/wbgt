// import { Chart } from 'chart.js/auto';
// import React, { useEffect, useRef } from 'react';
// import './App.css';

// function LineGraph({ lineChartData, histogramChartData }) {
//     const lineCanvasRef = useRef(null);
//     const histogramCanvasRef = useRef(null);
//     const lineChartInstanceRef = useRef(null);
//     const histogramChartInstanceRef = useRef(null);

//     useEffect(() => {
//         const lineCanvas = lineCanvasRef.current;
//         const lineCtx = lineCanvas.getContext('2d');

//         const histogramCanvas = histogramCanvasRef.current;
//         const histogramCtx = histogramCanvas.getContext('2d');

//         // Destroy the previous chart instances if they exist
//         if (lineChartInstanceRef.current) {
//             lineChartInstanceRef.current.destroy();
//         }
//         if (histogramChartInstanceRef.current) {
//             histogramChartInstanceRef.current.destroy();
//         }

//         // Create the line chart
//         lineChartInstanceRef.current = new Chart(lineCtx, {
//             type: 'line',
//             data: lineChartData,
//             options: {
//                 // Add your line chart options here if needed
//             },
//         });

//         // Create the histogram chart
//         histogramChartInstanceRef.current = new Chart(histogramCtx, {
//             type: 'bar',
//             data: histogramChartData,
//             options: {
//                 // Add your histogram chart options here if needed
//                 plugins: {
//                     legend: {
//                         display: true,
//                         labels: {
//                             // Customize the legend labels here
//                             generateLabels: function (chart) {
//                                 const originalLabels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
//                                 const customLabels = [
//                                     {
//                                         text: "Current WBGT Values", // Replace "Histogram Label 1" with your desired label text
//                                         fillStyle: 'rgba(75, 192, 192, 0.2)',
//                                         strokeStyle: 'rgba(75, 192, 192, 1)',
//                                     },
//                                     {
//                                         text: "WBGT Values for next 1 hour", // Replace "Histogram Label 2" with your desired label text
//                                         fillStyle: 'rgba(255, 99, 132, 0.2)', // You can customize the fill style for the new label
//                                         strokeStyle: 'rgba(255, 99, 132, 1)', // You can customize the stroke style for the new label
//                                     },
//                                 ];
//                                 return originalLabels.filter((label) => !customLabels.some((customLabel) => customLabel.text === label.text)).concat(customLabels);

//                             },
//                         },
//                     },
//                 },
//             },
//         })

//         // Cleanup function to destroy the chart instances when the component unmounts
//         return () => {
//             if (lineChartInstanceRef.current) {
//                 lineChartInstanceRef.current.destroy();
//             }
//             if (histogramChartInstanceRef.current) {
//                 histogramChartInstanceRef.current.destroy();
//             }
//         };
//     }, [lineChartData, histogramChartData]);

//     return (
//         <div className="graph-container"> {/* Use the graph-container class here */}
//             <div className="chart-container">
//                 <canvas ref={lineCanvasRef} />
//             </div>
//             <div className="chart-container">
//                 <canvas ref={histogramCanvasRef} />
//             </div>
//         </div>
//     );
// }



// export default LineGraph;
