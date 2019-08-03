import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="posts">
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/records'>Records</NavLink></li>
            <li><NavLink to='/appapi'>Mock-API</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;
