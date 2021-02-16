import React from 'react';
import PropTypes from 'prop-types';

import InOutField from './InOutField/InOutField';
import './style.css';

const LogRow = ({ log }) => (
    <div className="days-log-row">
        <div className="date">{log.date}</div>
        <div className="time-plan">
            <span>{log.timeRequired}</span>
            <span>{log.timeWorkedInFact}</span>
        </div>
        <div className="in-out">
            {log.inOutDayLogs.map((inOut, index) => (
                <InOutField key={index} inOut={inOut} />
            ))}
        </div>
    </div>
);

LogRow.propTypes = {
    log: PropTypes.shape({
        date: PropTypes.string.isRequired,
        timeRequired: PropTypes.string.isRequired,
        timeWorkedInFact: PropTypes.string.isRequired,
        inOutDayLogs: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['IN', 'OUT']).isRequired,
            time: PropTypes.string.isRequired,
            address: PropTypes.string,
        })),
    }).isRequired,
};

export default LogRow;
