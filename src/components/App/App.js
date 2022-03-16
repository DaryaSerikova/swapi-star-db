import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import Row from '../Row';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';

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

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => { //state (swapiService из него)
      //нас интересует предыдущее значение, поэтому смотрим state

      const Service = swapiService instanceof SwapiService ? //если это обычный SwapiService, то
                      DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };


  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService} > 
        {/* Место, в котором установливаем значение SwapiService */}

          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            {planet}

            <Row 
              left={<PersonList/>}
              right={<PersonDetails itemId={11}/>}/>

            <Row 
              left={<PlanetList/>}
              right={<PlanetDetails itemId={5}/>}/>

            <Row 
              left={<StarshipList/>}
              right={<StarshipDetails itemId={9}/>}/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};