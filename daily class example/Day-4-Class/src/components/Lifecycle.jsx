import React, { useEffect, useState } from 'react';

const Lifecycle = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log("Mounting");
        return () =>{
            console.log("Unmounting pahse");
        }
    },[value])
    return (
        <div>
            <h1>lifecycle component</h1>
            <h1>{value}</h1>
        </div>
    );
};

export default Lifecycle;