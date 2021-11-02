import {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { incrementCounter } from "./actions/index"

class App extends Component {
  

  render() {
    return(
      <div className="App">
        <h1>Klickzähler: {this.props.value}</h1>
        <button onClick={this.props.onIncrement}>Klick</button>
      </div>
    )
  }
}

let mapStateToProps = function(state) {
  return {
    value: state.counter
  }
}

let mapDispatchToProps = {
  onIncrement: incrementCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
