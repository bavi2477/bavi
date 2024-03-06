import React, { useState } from 'react';

const Card = ({item, setCartCount, cartCount}) => {
    const[status, setStatus] = useState(true)
    const cartAdd = ({item}) => {
        setStatus(false)
        setCartCount((val) => val + 1)
    }
    const cartRemove = () => {
        setStatus(true)
        setCartCount((val) => val - 1)
    }
    return (
        <div>
            <div>
            <div key={item.id}>
                        {item.name} : {item.price}
                        {status ? <button onClick={cartAdd}>Add to cart</button> : <button onClick={cartRemove}>remove from cart</button>}

                       </div>
            </div>
        </div>
    );
};

export default Card;