import React from 'react';

const ArrayOperation = ({setArrValue, arrValue}) => {
    const removeArrValue = (indexPos) => {
            setArrValue((pVal) => pVal.filter((item,index) => index !== indexPos))
    }

    const handleSubmit = () => {
        setArrValue((pVal) => [...pVal, 100])
    }
    return (
        <div>
            <h1>Array operation</h1>
            {arrValue.map((item,index) => {
                return (
                    <>
                    <div key = {index}>{item}
                        <button onClick={() => {removeArrValue(index)}}>remove</button>
                    
                    </div>
                    </>
                )
            })}
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default ArrayOperation;