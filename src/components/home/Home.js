import React from 'react';

import ErrorBoundary from '../../shared/components/error/ErrorBoundary';
import FileUpload from '../../shared/components/fileUpload/FileUpload';
import './styles/home.css';

const Home = () => (
    <div className="home">
        <ErrorBoundary>
            <FileUpload />
        </ErrorBoundary>
    </div>
);

export default Home;
