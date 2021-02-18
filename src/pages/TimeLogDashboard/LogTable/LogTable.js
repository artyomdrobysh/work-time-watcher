import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../../components/Loader/Loader';
import LogRow from './LogRow/LogRow';
import { getTimeLogsByEmployee } from '../services/api/time-log-api';
import './style.css';

const LogTable = () => {
    // useParams
    const { employeeId } = useParams();

    // useState
    const [logs, setLogs] = useState([]);
    const [fetchError, setFetchError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        getTimeLogsByEmployee(employeeId).then((result) => {
            if (isSubscribed) {
                if (result.error) {
                    setFetchError(result.error);
                } else {
                    setLogs(result);
                }
                setIsLoaded(true);
            }
        });

        return () => {
            isSubscribed = false;
        };
    }, [employeeId]);

    if (fetchError) {
        throw new Error(fetchError);
    }
    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <div className="days-log-tbl">
            {logs.map((log, index) => (
                <LogRow key={index} log={log} />
            ))}
        </div>
    );
};

export default LogTable;
