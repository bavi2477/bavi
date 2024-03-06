import React from 'react';

const StateCopm = ({setValue, value}) => { 
    const handleSubmit = () => {
        setValue(val => val + 1)
    }
    return (
        <div>
            <h1>state component</h1>
            <h1>State Value: {value}</h1>
            <button onClick={handleSubmit}> click</button>
        </div>
    );
};

export default StateCopm;