/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import './App.css';
import React, {Component} from 'react';

const QUOTES_CONST = [
  ['Nothing is true on the internet', 'Abraham Lincoln'],
  ['Our words are backed by nuclear weapons', 'Mahatma Gandhi']];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    console.log('is this call manditory?');
    this.getQuote('null lmao');
  }

  getQuote(_event) {
    // console.log(event);
    const quotient = (((Math.random()) > .5) ?
      QUOTES_CONST[0] :
      QUOTES_CONST[1]);
    // quotient
    console.log(quotient);
    this.setState({
      quote: quotient[0],
      author: quotient[1],
    });
    return Math.random > .5 ? QUOTES_CONST[0] : QUOTES_CONST[1];
  }

  render() {
    return (
      <div id="quote-box">
        <div id="quote-container">
          <QuoteDisplay quote={this.state.quote}/>
          <AuthorDisplay author={this.state.author}/>
        </div>
        {/* <br /> */}
        <div id="buttons">
          <TwitterButton id="tweet-quote" />
          <GenQuoteButton id="new-quote" getQuote={this.getQuote}/>
        </div>
      </div>
    );
  }
}

const QuoteDisplay = (props) => {
  return (
    <p id="text">&quot;{props.quote}&quot;</p>
  );
};

const AuthorDisplay = (props) => {
  return (
    <p id="author">-{props.author}</p>
  );
};

class GenQuoteButton extends Component {
  constructor(props) {
    super(props);
    this.pressButton = this.pressButton.bind(this);
  }
  pressButton() {
    console.log('horra horra');
  }
  render() {
    return (
      <button 
        type="button" 
        id="new-quote" 
        onClick={this.props.getQuote}>
        New Quote
      </button>
    );
  }
}

class TwitterButton extends Component {
  constructor(props) {
    super(props);
    this.pressButton = this.pressButton.bind(this);
  }
  pressButton() {
    console.log('lol');
  }
  render() {
    // <i class="fa fa-tumblr"></i>
    return (
      <a 
        id="tweet-quote" 
        target="_blank" 
        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=lmao"
        onClick={this.pressButton} 
        rel="noreferrer">
        <i className="bi bi-twitter"></i>
      </a>
    );
  }
}

export default App;
