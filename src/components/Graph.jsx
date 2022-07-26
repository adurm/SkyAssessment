import { useState, useEffect } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

export default function Graph() {
    
    const [analytics, setAnalytics] = useState([]);

    // Initially fetch data and save to state
    useEffect(() => {
        async function initAnalytics() {
            const response = await fetch("https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data");
            const dataset = await response.json();
            // Convert timestamp to HH:MM
            dataset.forEach(data => {
                data.timestamp = timestampToTimeOfDay(data.timestamp);
            })
            setAnalytics(dataset);
        }
        initAnalytics();
    }, [])

    function timestampToTimeOfDay(seconds) {
        // Slice off everything that's not HH:MM from the full date
        return new Date(seconds).toString().slice(16, -34);
    }

    const data = {
        labels: analytics.map(a => a.timestamp),
        datasets: [{
            label: 'Views',
            data: analytics.map(a => a.value),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    }
    
    return (
        <div className="flex flex-wrap pb-24 px-24 justify-center items-center">
            <h1 className="font-skybold text-xl">07 July 2021</h1>
            <Line data={data}/>
        </div>
    )
}