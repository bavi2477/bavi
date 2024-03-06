import React from 'react';

const CompB = ({obj}) => {
    const clickEvent = () => {
        console.log("Component B");
    }
    return (
        <div>
            <h1 style={{color:'blueviolet'}}>Component B</h1>
            <button onClick={clickEvent}>click</button>
            {obj.batch}
            {obj.team}
        </div>
    );
};

export default CompB;