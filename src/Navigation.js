import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/records'>Records</NavLink>
            <NavLink to='/appapi'>Mock-API</NavLink>

        </div>
    );
};

export default Navigation;