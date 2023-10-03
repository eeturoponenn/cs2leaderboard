import React, { useState, useEffect } from 'react';
import './index.css';
import Leaderboard from './leaderboard';

type Player = {
    rank: number;
    score: number;
    name: string;
};

function App() {
    const [data, setData] = useState<Player[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/leaderboard/${page}`);
                const jsonData = await response.json();
                setData(jsonData.result.entries);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [page]);

    return (
        <div className='container'>
            <Leaderboard 
                data={data} />
        </div>
    );
}

export default App;

