import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  let [state, setState] = useState([
    {
      name: 'Winnie',
      cards: ['Buy groceries', 'Take out the trash'],
      color: '#8E6E95',
    },
    {
      name: 'Bob',
      cards: ['something else', 'Take out the trash'],
      color: '#39A59C',
    },
    {
      name: 'Thomas',
      cards: ['Buy groceries', 'and do this'],
      color: '#344759',
    },
    {
      name: 'George',
      cards: ['Buy groceries', 'Take out the trash'],
      color: '#E8741E',
    }
  ]);

  // Code below executes when component first mounts
  useEffect(()=>{
    let data = localStorage.getItem('data')
    if (data){
      setState(JSON.parse(data))
    }
  },[])

  // Code below executes each time the state updates
  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(state))
  })

  let addCard = (colIndex) => {
    let newCard = prompt('Add a card');
    let newState = state.slice();
    newState[colIndex].cards.push(newCard);
    setState(newState);
  }

  let moveCard = (currentIndex, nextIndex, cardIndex, card) => {
    let newState = state.slice();
    newState[currentIndex].cards = newState[currentIndex].cards.filter((item,i)=>{
      return i !== cardIndex
    })
    newState[nextIndex].cards.push(card)
    setState(newState)
  }

  let columns = state.map((col, colIndex)=>{
    let cards = col.cards.map((card, cardIndex)=>{
      return (
        <div className="card">
          {colIndex>0&&<div className="left" onClick={()=>moveCard(colIndex, colIndex-1,cardIndex,card)}>
            {'<'}
          </div>}
          <div className="value">
            {card}
          </div>
          {colIndex<state.length-1&&<div className="right" onClick={()=>moveCard(colIndex, colIndex+1,cardIndex,card)}>
            {'>'}
          </div>}
        </div>
      );
    })
    return (
      <div className="col">
        <div className="name" style={{background: col.color}}>
          {col.name}
        </div>
        <div className="cards">
          {cards}
        </div>
        <div className="addCard" onClick={()=>addCard(colIndex)}>
          + Add a card
        </div>
      </div>
    );
  })
  return (
    <div className="App">
      {columns}
    </div>
  );
}

export default App;
