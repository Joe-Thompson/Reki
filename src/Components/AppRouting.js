import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';


export default function AppRouting() {
    return (
        <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/welcome' component={Dashboard} />
        </div>
    )
}