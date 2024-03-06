import React from 'react';
import './style/CompA.css';

const CompA = () => {

    const handlesubmit = () => {
        alert("button clicked event in A component")
    }
    return (
        <div>
            <h1 id='htag'>Component A</h1>
            <button onClick={handlesubmit}>click</button>
        
        </div>
    );
};

export default CompA;