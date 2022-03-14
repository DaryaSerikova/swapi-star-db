import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';

import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import { Record } from '../ItemDetails/ItemDetails';

export default class App extends Component {

  swapiService =  new SwapiService();

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

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails 
      itemId={11}
      getData={getPerson}  
      getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender"></Record>
        <Record field="eyeColor" label="Eye Color"></Record>
        
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
      itemId={5}
      getData={getStarship} 
      getImageUrl={getStarshipImage}>

      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />

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
          <Row
            left={personDetails}
            right={starshipDetails}
          />

          {/* <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (
                  <span>{item.name}<button>!</button></span>
                  )}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => item.name}
              />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div> */}

        </div>
      </ErrorBoundary>
    );
  }
};