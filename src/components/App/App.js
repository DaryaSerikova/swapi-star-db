import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList';
// import PersonDetails from '../PersonDetails';

import './App.css';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };



  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({
      hasError: true
    })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;
    
    return (
      <div className="stardb-app">
        <Header />

        {planet}
        {/* <RandomPlanet />  */}
         
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton/>
        </div>

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />


      </div>
    );
  }
};