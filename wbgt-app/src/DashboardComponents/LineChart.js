import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

function LineChart({ lineChartData }) {
  const lineCanvasRef = useRef(null);
  const lineChartInstanceRef = useRef(null);

  useEffect(() => {
    const lineCanvas = lineCanvasRef.current;
    const lineCtx = lineCanvas.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (lineChartInstanceRef.current) {
      lineChartInstanceRef.current.destroy();
    }

    // Create the line chart
    lineChartInstanceRef.current = new Chart(lineCtx, {
      type: 'line',
      data: lineChartData,
      options: {
        // Add your line chart options here if needed
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (lineChartInstanceRef.current) {
        lineChartInstanceRef.current.destroy();
      }
    };
  }, [lineChartData]);

  return (
    <div className="chart-container">
      <canvas ref={lineCanvasRef} />
    </div>
  );
}

export default LineChart;
