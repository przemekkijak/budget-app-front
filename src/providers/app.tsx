import React from 'react';
import { BrowserRouter as Router, RouterProps } from 'react-router-dom';
import { History } from 'history';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const routerProps: RouterProps = {
        location: '/',
        navigator: null as unknown as History,
    };

    return (
        <Router {...routerProps}>
            {children}
        </Router>
    );
};





