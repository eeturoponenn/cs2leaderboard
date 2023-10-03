import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type LeaderboardProps = {
    data: Array<{
        rank: number;
        name: string;
        score: number;
    }>;
};

const PLAYERS_PER_PAGE = 20; 

const Leaderboard = ({ data } : LeaderboardProps)=> {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / PLAYERS_PER_PAGE);
    const startIndex = (currentPage - 1) * PLAYERS_PER_PAGE;
    const playersToDisplay = data.slice(startIndex, startIndex + PLAYERS_PER_PAGE);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div>
            <h1 className="cs-title">CS2 Leaderboard - Premier Season I</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {playersToDisplay.map(player => (
                        <tr key={player.rank}>
                            <td>{player.rank}</td>
                            <td>{player.name}</td>
                            <td>{Math.round(player.score / 100000)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Leaderboard;
