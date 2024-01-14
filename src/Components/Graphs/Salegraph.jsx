import React from 'react';
import { Line } from 'react-chartjs-2';
import { useRef ,useEffect} from 'react';
import 'chart.js/auto';

const Salegraph = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'], // X-axis labels
    datasets: [
      {
        label: '',
        data: [3500, 6000, 4000, 8000, 7000, 9000], // Your data values
        fill: false,
        backgroundColor: 'blue', // Point color
        borderColor: 'blue', // Line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio : false,
    plugins: {
        legend: {
          display: false, // This will hide the legend
        }
      },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Line style={{width:"100%"}} ref={chartRef} data={data} options={options} />;
};

export default Salegraph;
