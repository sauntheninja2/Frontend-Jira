import React, { useState } from 'react';
import  ReactDOM  from 'react-dom';
import styled from '@emotion/styled';
import {  DragDropContext , Droppable , Draggable } from "react-beautiful-dnd";

/*const Quotes = [
  {"id": "0" , "quote":"Quote0"},
  "Quote1",
  "Quote2",
  "Quote3",
  "Quote4",
  "Quote5",
  "Quote6",
  "Quote7",
  "Quote8",
  "Quote9",
  "Quote10"
];

*/


const initial = Array.from({  length: 10 }, (v,k) => k).map(k => {
  
  const custom = {
    id: `id:${k}`,
    content: `Quotes ${k}`
  };

  return custom;
});
const inital2 = Array.from({  length: 10} , (v,k) => k ).map(k => {

  const custom2 = {
    id: `id:${k}`,
    content2: `Quotes2 ${k}`
  };

  return custom2;

})



const grid = 8;
const reorder = (list,startIndex , endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex , 1);
  result.splice(endIndex , 0 , removed);

  return result;
}

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
  `;

  function Quote({  quote , index }) {
    return (
      <Draggable key={quote.id} draggableId={quote.id} index={index}>
        {provided => (
          <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            {quote.content}
          </QuoteItem>
        )}
      </Draggable>
    );
  }


const QuoteList = React.memo(function QuoteList({ quotes }) {

  return quotes.map((quote , index) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

function QuoteApp() {
  const [state,setState] = useState({ quotes: initial , quotes2: inital2});

  function onDragEnd(result) {
    if(!result.destination) {
      return;
    }

    if(result.destination.index == result.source.index){
      return
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    const quotes2 = reorder(
      state.quotes2,
      result.source.index,
      result.destination.index
    );

    setState({  quotes , quotes2 });
  }

  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='list'>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
            <QuoteList quotes={state.quotes2} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default QuoteApp;