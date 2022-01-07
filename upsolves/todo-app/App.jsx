import {useState, useEffect} from 'react';
import styled from 'styled-components'
import Column from './components/Column'
import data from './data.json'
import Context from './Context'

function App() {
  const getRandomId = () => Math.floor() * 1_000_000_000
  const [state, setState] = useState()

  useEffect(()=>{
    const storedState = localStorage.getItem('state');
    if (storedState){
      setState(JSON.parse(storedState))
    } else {
      setState(data)
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('state',JSON.stringify(state))
  })

  if (!state) return 'Loading...';

  console.log(state)
  const columns = state.map(({name, color, todos, id}, i)=>{
    return <Column key={id} name={name} color={color} cards={todos} colIndex={i} id={id}/>
  })

  const addCard = (columnID) => {
    const cardValue = prompt('Add a card');
    setState(state.map(column=>{
      if (column.id === columnID){
        column.todos.push({value: cardValue, id: getRandomId()})
      } 
      return column
    }))
  }

  const popCard = (colIdx, cardID) => {
    let slicedState = state.slice();
    let cardToPop = null;
    slicedState[colIdx].todos = slicedState[colIdx].todos.filter(card=>{
      if (card.id === cardID){
        cardToPop = card
        return false
      }
      return true
    })
    setState(slicedState)
    return cardToPop
  }

  const insertCard = (colIdx, card) => {
    setState(state.map((col, i) => {
      if (i === colIdx){
        col.todos.push(card)
      }
      return col
    }));
  }

  const moveCard = (fromColIdx, toColIdx, cardID) => {
    const card = popCard(fromColIdx, cardID);
    insertCard(toColIdx, card)
  }


  const eventHandlers = {
    addCard,
    moveCard
  }

  return (
    <Context.Provider value={eventHandlers}>
      <Board>
        {columns}
      </Board>
    </Context.Provider>
  );
}


const Board = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

export default App;








---- Column.js ------
import {useContext} from 'react';
import styled from 'styled-components'
import Card from './Card'
import Context from '../Context';

const Column = ({name, color, cards, colIndex, id}) => {

    const { addCard } = useContext(Context)
    const cardList = cards.map((card) => <Card key={card.id} info={card} i={colIndex}/>);
    return (
      <ColumnContainer>
        <ColumnName color={color}>
          {name}
        </ColumnName>
        <ColumnCards>
          {cardList}
        </ColumnCards>
        <button onClick={()=>(addCard(id))}>Add Card</button>
      </ColumnContainer>
    )
  }
  
  const ColumnContainer = styled.div`
    flex-basis: 0px;
    flex-grow: 1;
    min-width: 1px;
    margin-left: 25px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    &:last-child{
      margin-right: 25px;
    };
    border: 1px solid gray;
    grid-border: 1px solid gray;
  `
  const ColumnName = styled.div`
    background: ${({color}) => color};
    width: 100%;
    display: flex;
    height: 2em;
    justify-content: center;
    align-items: center;
  `
  
  const ColumnCards = styled.div`
    width: 100%;
  `

export default Column;





---------- Card.js --------
import {useContext} from 'react';
import styled from 'styled-components'
import Context from '../Context'


const Card = ({info, i}) => {
    const { moveCard } = useContext(Context)
    return (
        <CardContainer>
            {i !== 0 ? <Button onClick={()=>{moveCard(i, i-1, info.id)}}>{'<'}</Button> : null}
            <CardText>{info.value}</CardText>
            {i !== 3 ? <Button onClick={()=>{moveCard(i, i+1, info.id)}}>{'>'}</Button> : null}
        </CardContainer>
    );
}

const CardText = styled.span`
  word-break: break-word; 
  text-align: center;
  grid-area: text;
`

const Button = styled.span`
  grid-area: left;
  &:last-child{
    justify-self: end;
    grid-area: right;
  }
  align-self: center;
  cursor: pointer;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-areas: "left text right";
  grid-template-columns: 1.5em auto 1.5em;
  border-top: 1px solid gray;
  &:last-child{
    border-bottom: 1px solid gray;
  }
`

export default Card;









------ data.json -------

[
    {
      "name": "Winnie",
      "color": "red",
      "id": 1,
      "todos": [ { "value": "do this.","id": 1}, { "value": "This too","id": 2}]
    },
    {
      "name": "Bob",
      "color": "blue",
      "id": 2,
      "todos": [
        { "value": "do this. a;skjdfhas dfkjhasd flkjashdf lkajsdhf klasjdhf aklsdjhf askldjfh asdkljfh asdlkfjhasd flkajsdhfasldkjfhsadlkfjhasdklfjdshdf ","id": 3}
      ]
    },
    {
      "name": "Thomas",
      "color": "green",
      "id": 3,
      "todos": []
    },
    {
      "name": "George",
      "color": "gray",
      "id": 4,
      "todos": [ { "value": "do this.","id": 4}, { "value": "This too","id": 5}]
    }
  ]



------ Context.js -------

import React from 'react';

const Context = React.createContext();

export default Context;
