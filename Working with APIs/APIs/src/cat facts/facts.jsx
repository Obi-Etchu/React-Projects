// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Facts.css';

const Facts = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then((res) => res.json())
            .then((data) => {
                setData(data.fact); 
                setLoading(false);   
            });
    }, []);

    return (
        <div className="facts-container">
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <p className="fact-text">Cat Fact!!: {data}</p>
            )}
        </div>
    );
};

export default Facts;
