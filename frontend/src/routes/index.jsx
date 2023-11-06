import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import RootRedirect from './RootRedirect';
import Login from '../components/Login';
// import Register from '../components/Register';


function TotalRoutes ()
{
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={ <RootRedirect /> } />
                    <Route path="/login" element={ <Login /> } />
                    {/* <Route path="/register" element={ <Register /> } /> */}
                </Routes>
            </Router>
        </>
    )
}

export default TotalRoutes;
