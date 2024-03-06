import React from 'react';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

const App = () => {
  let a=10;
  const arr = [1,2,3,4,5];
  const obj = {
    batch : 'FSD55',
    team : 'Suresh'
  }
  const arrObj = [
    {id:1,name:'Bavithra',designation:'fsd'},
    {id:2,name:'Ram',designation:'Tester'},
    {id:3,name:'Saranya',designation:'fsd'},
]
  return (
    <div>
      {a}
      <h1>App component A value is: {a}</h1>
      <CompA />
      <CompB obj = {obj}/>
      <CompC arrObj = {arrObj}/>
    </div>
  );
};

export default App;