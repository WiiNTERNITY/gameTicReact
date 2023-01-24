import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Titre titredemonsite="Welcome to React" />
        </header>
       <Intro introdemonsite="reload"/>
      </div>
    );
  }
}

class Titre extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    };
  }

  inc(){
    let inc = this.state.counter;
    inc = inc + 1;
    this.setState(
      {
        counter : inc
      }
    );
  }

  renderButton(){
    return (<Button onClick={ () => this.inc() } counter = {this.state.counter}/>);
  }

  render(){
    return(
      <h1 className="App-title" >
      {this.props.titredemonsite}
       {this.renderButton()}
       {this.renderButton()}
      </h1>
    )
  }
}

class Button extends Component{
  
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>Test {this.props.counter}</button>
    )
  }
}

class Intro extends Component {
  render(){
    return(
      <p className="App-intro" > "To get started, edit src/App.js and save to {this.props.introdemonsite}"</p>
    )
  }
}


export default App;
