import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useRef ,useEffect} from 'react';
import 'chart.js/auto';

const Bookinggraph = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ['Mon 1', 'Tue 2', 'Wed 3', 'Thu 4', 'Fri 5', 'Sat 6', 'Sun 7'],
    datasets: [
      {
        label: 'Confirmed',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(0, 91, 255, 1)',
      },
      {
        label: 'Cancelled',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(255, 0, 0, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio : false,
    scales: {
      x: {
        stacked: true,
        grid: {
            display: false, // This will remove the horizontal grid lines
          }
      },
      y: {
        stacked: true,
        
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
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

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default Bookinggraph;
