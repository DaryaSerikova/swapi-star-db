import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';

import { SwapiServiceProvider } from '../SwapiServiceContext.js';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter as Router, Route} from 'react-router-dom';



export default class App extends Component {

  state = {
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

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService} > 
        {/* Место, в котором установливаем значение SwapiService */}
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>

              <RandomPlanet updateInterval={5000}/>

              <Route path="/" 
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact={true} // можно написать просто true
                />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
};