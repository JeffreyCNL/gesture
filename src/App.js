import React, {useState} from 'react';
import './App.css';
import Room from './components/Room'; // remove room in the future
import Entry from './components/Entry';
import Home from './components/Home';
import Game from './components/Game';
import Word from './components/Word';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  
  changeName = newName => this.setState({ name: newName });
  changeRoom = newRoom => this.setState({room: newRoom})


  constructor(props) {
    super(props);
    this.state ={ name : "debo" , room: this.randomInt(5678,5678) };
    // this.changeRoom(this.randomInt(1000000,10000000000));
    console.log("roomID in App:" + this.state.room);
  }
  
  randomInt = (min, max) =>{
    return Math.floor(Math.random()* (max-min +1 )) + min;
  }


  render() {
    console.log(this.props)
    console.log(this.state)
    let room = this.state.room;
    return (
        <Router>
          <div className="main-container">
            <React.Fragment>
              <Switch>
                <Route exaxt path="/" exact component={Home} />
                <Route path="/room" component={Room} />
                <Route exact path="/entry" render={()=> <Entry name={this.state.name} room={this.state.room} changeName={this.changeName} changeRoom={this.changeRoom} />} />
                <Route exact path="/game/:room" render={()=><Game name= {this.state.name} room={this.state.room} changeRoom={this.changeRoom} />} />
                <Route exact path="/word" exact component={Word} />
              </Switch>
            </React.Fragment>
          </div>
        </Router>)
  }
}

export default App;