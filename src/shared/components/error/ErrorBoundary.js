import React from 'react';

import './styles/error.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    static getDerivedStateFromError(error) {
        return {
            error
        };
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <div className="error">{error.message}</div>;
        }

        const { children } = this.props;
        return children;
    }
}

export default ErrorBoundary;
