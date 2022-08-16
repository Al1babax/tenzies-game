import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let tempArray = []
for (let i = 0; i < 10; i++) {
  let newDice = { [i + 1]: { value: 1, isGreen: false } };
  tempArray.push(newDice);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      data={tempArray}
    />
  </React.StrictMode>
);

