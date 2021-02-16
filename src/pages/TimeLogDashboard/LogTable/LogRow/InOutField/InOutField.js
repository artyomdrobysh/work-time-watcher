import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const InOutField = ({ inOut }) => (
    <div className={`log-in-out-field ${inOut.type.toLowerCase()}`}>
        <span>{inOut.time}</span>
        <span>{inOut.address}</span>
    </div>
);

InOutField.propTypes = {
    inOut: PropTypes.shape({
        type: PropTypes.oneOf(['IN', 'OUT']).isRequired,
        time: PropTypes.string.isRequired,
        address: PropTypes.string,
    }).isRequired,
};

export default InOutField;
