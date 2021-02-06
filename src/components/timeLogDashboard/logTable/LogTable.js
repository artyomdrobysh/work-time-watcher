import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../../shared/components/loader/Loader';
import LogRow from './logRow/LogRow';
import apiConfig from '../../../shared/config/apiServices';
import './styles/logTable.css';

const LogTable = () => {
    // useParams
    const { userId } = useParams();

    // useState
    const [logs, setLogs] = useState([]);
    const [fetchError, setFetchError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        fetch(`${apiConfig.timeLogServiceApi}/log/${userId}`)
            .then((result) => result.json())
            .then((data) => {
                if (isSubscribed) {
                    setLogs(data);
                    setIsLoaded(true);
                }
            }, (error) => {
                if (isSubscribed) {
                    setFetchError(error);
                }
            })
            .catch((error) => {
                if (isSubscribed) {
                    setFetchError(error);
                }
            });

        return () => {
            isSubscribed = false;
        };
    }, [userId]);

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
