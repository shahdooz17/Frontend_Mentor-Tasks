    import React from 'react';
    import ActivityCard from './ActivityCard';

    import playIcon from '../images/icon-play.svg';
    import exerciseIcon from '../images/icon-exercise.svg';
    import socialIcon from '../images/icon-social.svg';
    import selfCareIcon from '../images/icon-self-care.svg';
    import studyIcon from '../images/icon-study.svg';
    import workIcon from '../images/icon-work.svg';

    const activityIcons = {
    Work: { src: workIcon, alt: 'work-icon' },
    Play: { src: playIcon, alt: 'play-icon' },
    Study: { src: studyIcon, alt: 'study-icon' },
    Exercise: { src: exerciseIcon, alt: 'exercise-icon' },
    Social: { src: socialIcon, alt: 'social-icon' },
    'Self Care': { src: selfCareIcon, alt: 'self-care-icon' },
    };

    export default function ActivityContainer({ data, current, previous }) {
    return (
        <>
        {data.map((activity) => {
            const { title, timeframes } = activity;
            const { src, alt } = activityIcons[title] || {};

            return (
            <ActivityCard
                key={title}
                title={title}
                timeFrameCurrent={timeframes[current].current}
                timeFramePrevious={timeframes[previous].previous}
                icon={src}
                alt={alt}
            />
            );
        })}
        </>
    );
    }
