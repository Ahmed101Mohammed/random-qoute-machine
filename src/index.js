import React from 'react';
import {render} from 'react-dom';
import './style.css';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

// Readux:
const state = -1;
const GETQUOTE = 'GETQOUTE';

  // Reducer
const reducer = (s = state, action) =>
{
  switch(action.type)
  {
    case GETQUOTE:
      return action.index;
    default:
      return  state;
  }
}

const getQoute = ()=>{return {
  type: GETQUOTE,
  index: parseInt(Math.random()*10)
}}

  // store:
const store = createStore(reducer);
store.dispatch(getQoute());
console.log(store.getState());
// React:
const App = (props)=>{
  const quotes = [
    {author:"Oscar Wilde",quote:"Be yourself; everyone else is already taken.",color:"gray",pg:"rebeccapurple"},
    {author:"Frank Zappa",quote:"So many books, so little time."},
    {author:"Oscar Wilde",quote:"To live is the rarest thing in the world. Most people exist, that is all."},
    {author:"Marcus Tullius Cicero",quote:"A room without books is like a body without a soul."},
    {author:"Mae West",quote:"You only live once, but if you do it right, once is enough."},
    {author:"Mahatma Gandhi",quote:"Be the change that you wish to see in the world."},
    {author:"Mark Twain",quote:"If you tell the truth, you don't have to remember anything."},
    {author:" Elbert Hubbard",quote:"A friend is someone who knows all about you and still loves you."},
    {author:"Friedrich Nietzsche, Twilight of the Idols",quote:"Without music, life would be a mistake."},
    {author:"Oscar Wilde, The Happy Prince and Other Stories",quote:"I am so clever that sometimes I don't understand a single word of what I am saying."},
  ]

  return(
    <div id="quote-box">
      <h1 id="text">{quotes[props.index].quote}</h1>
      <p id="author">-- {quotes[props.index].author}</p>
      <div>
        <a src="twitter.com/intent/tweet" target="_top" id="tweet-quote">t</a>
        <button id="new-quote" onClick={props.newQ}>New Quote</button>
      </div>
    </div>
  )
}

// React-Redux:
const stp = (state)=>
{
  return{index: state};
}

const atp = (dispatch)=>{
  return{newQ:()=>{dispatch(getQoute())}}
}

const Newapp = connect(stp,atp)(App);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Newapp />
    </Provider>
  </React.StrictMode>
);


