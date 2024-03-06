import React from 'react';

const Props = ({a}) => {
    const handleSubmit = () => {
        a = a + 1;
        console.log(a);
    }
    
    return (
        <div>
            <h1>props component</h1>
            <h1>a value : {a}</h1>
            <button onClick={handleSubmit}>click</button>
        </div>
    );
};

export default Props;