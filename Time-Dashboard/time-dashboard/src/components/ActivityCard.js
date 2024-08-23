    import React from 'react';
    import './ActivityCard.css';
    import ellipsisIcon from '../images/icon-ellipsis.svg';

    export default function ActivityCard({ icon, alt, title, timeFrameCurrent, timeFramePrevious }) {
    return (
        <section className="dashboard-item">
        <div className="background-pic">
            <img src={icon} alt={alt} />
        </div>
        <div className="dashboard-item-text">
            <div className="flex-top">
            <h2 className="activity-title">{title}</h2>
            <img src={ellipsisIcon} alt="ellipsis" />
            </div>
            <div className="flex-bottom">
            <h3 className="time-amount">{timeFrameCurrent}hrs</h3>
            <p className="previous-time-amount">
                Last Week - {timeFramePrevious}hrs
            </p>
            </div>
        </div>
        </section>
    );
    }
