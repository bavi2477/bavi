import React, { useState } from 'react';
import Props from './components/Props';
import StateCopm from './components/StateCopm';
import ArrayOperation from './components/ArrayOperation';
import ConditionalRendering from './components/ConditionalRendering';

const App = () => {
  const[value, setValue] = useState(0)
  let a = 10;
  let b = [1,2,3,4,5];
  const [arrValue, setArrValue] = useState(b)

  const [status, setStatus] = useState(true)
  const[cartCount, setCartCount] = useState(0)
  let data = [
    {id:1, name:"top", price:1200},
    {id:2, name:"jeans", price:1300},
    {id:3, name:"slipper", price:1400},
  ];
  const [products, setProducts] = useState(data)
  return (
    <div>
      <h1>App Component</h1>
      {/* <h1> a value : {a} </h1>
      <h1>State value : {value}</h1>
      <Props a = {a} />
      <StateCopm setValue = {setValue} value = {value}/>
      <ArrayOperation setArrValue = {setArrValue} arrValue = {arrValue} /> */}
      <h1>cart count: {cartCount}</h1>
      {status ? <ConditionalRendering setCartCount = {setCartCount} cartCount = {cartCount} setProducts = {setProducts} products = {products}/> : ''}
      
    </div>
  );
};

export default App;