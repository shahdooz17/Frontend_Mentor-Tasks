import React from 'react';
import './NameCard.css';
import userPic from '../images/image-jeremy.png';

function NameCard({ current, changeDisplayedData }) {
    const timeframes = ['daily', 'weekly', 'monthly'];

    return (
        <header className="name-and-options-card-container">
            <div className="name-card">
                <img src={userPic} alt="user" />
                <div className="name-card-text">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>

            <div className="time-options-container">
                <ul>
                    {timeframes.map((timeframe) => (
                        <li key={timeframe}>
                            <button
                                onClick={() => changeDisplayedData(timeframe)}
                                className={`time-button ${current === timeframe ? 'active' : ''}`}
                            >
                                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default NameCard;
