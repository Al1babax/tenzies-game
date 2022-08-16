import Layout from './components/layout';
import { useState, useEffect } from 'react';


function App(props) {

  const [dices, setDices] = useState(props.data);
  const [win, setWin] = useState(false);


  function changeColor(id) {
    let newArray = [...dices];
    newArray[id - 1][id].isGreen = !newArray[id - 1][id].isGreen;
    setDices(newArray);
  }

  function rollDices() {
    let newArray = [...dices];
    for (let i = 0; i < newArray.length; i++) {
      if (!newArray[i][i + 1].isGreen) {
        newArray[i][i + 1].value = Math.floor(Math.random() * 6) + 1;
      }
    }
    setDices(newArray);
  }

  useEffect(() => {rollDices()}, []);

  function checkWin() {
    let tempWin = true;
    let diceValue = dices[0][1].value;
    for (let i = 1; i < dices.length - 1; i++) {
      if (dices[i][i + 1].value !== diceValue) {
        tempWin = false;
      }
    }

    setWin(tempWin);
  }

  useEffect(() => { checkWin() }, [dices]);

  function resetDices() {
    let resetDiceValues = [...dices]
    for (let i = 0; i < resetDiceValues.length; i++) {
      if (resetDiceValues[i][i + 1].isGreen) {
        resetDiceValues[i][i + 1].isGreen = false;
      }
    }
    setDices(resetDiceValues);
    rollDices();
  }



  return (
    <div className="w-screen h-screen bg-slate-800">
      <Layout
        changeColor={changeColor}
        rollDices={rollDices}
        dices={dices}
        reset={resetDices}
      />
    </div>
  );
}

export default App;
