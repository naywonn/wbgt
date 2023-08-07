
import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

function HistogramChart({ histogramChartData }) {
    const histogramCanvasRef = useRef(null);
    const histogramChartInstanceRef = useRef(null);
    

    useEffect(() => {
        const histogramCanvas = histogramCanvasRef.current;
        const histogramCtx = histogramCanvas.getContext('2d');

        // Destroy the previous chart instance if it exists
        if (histogramChartInstanceRef.current) {
            histogramChartInstanceRef.current.destroy();
        }

        // Create the histogram chart
        if (histogramChartData) {
            histogramChartInstanceRef.current = new Chart(histogramCtx, {
                type: 'bar',
                data: histogramChartData,
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                // Customize the legend labels here
                                generateLabels: function (chart) {
                                    const customLabel = {
                                        text: "Current WBGT Values", 
                                        fillStyle: 'rgba(75, 192, 192, 0.2)', 
                                        strokeStyle: 'rgba(75, 192, 192, 1)', 
                                    };
                                    return [customLabel];
                                },
                            },
                        },
                    },
                    scales: {
                        x: {
                            stacked: true, // Stacked bar chart
                        },
                        y: {
                            stacked: true, // Stacked bar chart
                        },
                    },
                },
            });
        }

        // Cleanup function to destroy the chart instance when the component unmounts
        return () => {
            if (histogramChartInstanceRef.current) {
                histogramChartInstanceRef.current.destroy();
            }
        };
    }, [histogramChartData]);

    return (
        <div className="chart-container">
            <canvas ref={histogramCanvasRef} />
        </div>
    );
}

export default HistogramChart;
