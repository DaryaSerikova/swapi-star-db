import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import Row from '../Row';

import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import { Record } from '../ItemDetails/ItemDetails';

import { SwapiServiceProvider } from '../SwapiServiceContext.js';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../SWcomponents';

export default class App extends Component {

  // swapiService =  new DummySwapiService(); //DummySwapiService | SwapiService

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => { //state (swapiService из него)
      //нас интересует предыдущее значение, поэтому смотрим state

      const Service = swapiService instanceof SwapiService ? //если это обычный SwapiService, то
                      DummySwapiService : SwapiService;
      console.log('switched to', Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  // componentDidCatch() {
  //   console.log('componentDidCatch()');
  //   this.setState({
  //     hasError: true
  //   })
  // }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.state.swapiService;

    const personDetails = (
      <ItemDetails/>
    );

    const starshipDetails = (
      <ItemDetails />
    );

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService} > 
        {/* Место, в котором установливаем значение SwapiService */}
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={9}/>

            {/* {planet}

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton/>
            </div> */}


            {/* <PeoplePage /> */}
            {/* <Row
              left={personDetails}
              right={starshipDetails}
            /> */}

            <PersonList/>
            <PlanetList/>
            <StarshipList/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};