import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
  return (
    <div className="nav">
      <div className="navi home"><Link to="/">Home</Link></div>
      <div className="navi about"><Link to="/about">About</Link></div>
    </div>
  );
}

export default Navigation;