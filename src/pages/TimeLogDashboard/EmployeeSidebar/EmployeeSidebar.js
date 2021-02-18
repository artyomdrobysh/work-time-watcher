import React, { useState, useEffect } from 'react';

import Loader from '../../../components/Loader/Loader';
import LinkSidebar from '../../../components/LinkSidebar/LinkSidebar';
import { getAllEmployees } from './services/api/employee-api';

const EmployeeSidebar = () => {
    // useState
    const [employees, setEmployees] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchError, setFetchError] = useState('');

    // useEffect
    useEffect(() => {
        let isSubscribed = true;
        getAllEmployees().then((result) => {
            if (isSubscribed) {
                if (result.error) {
                    setFetchError(result.error);
                } else {
                    setEmployees(result);
                }
                setIsLoaded(true);
            }
        });

        return () => {
            isSubscribed = false;
        };
    }, []);

    if (fetchError) {
        throw new Error(fetchError);
    }
    if (!isLoaded) {
        return <Loader />;
    }

    return <LinkSidebar items={employees} />;
};

export default EmployeeSidebar;
