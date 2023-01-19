import React from "react";
import './App.css';
import Card from "./components/card/Card";
import {cardList} from "./components/store/data";
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='navbar__header'>Ты сегодня покормил кота?</div>
      </div>
      <div className='block'>
        <Card props={cardList.card1}/>
        <Card props={cardList.card2}/>
        <Card props={cardList.card3}/>
      </div>
    </div>
  );
}

export default App;
