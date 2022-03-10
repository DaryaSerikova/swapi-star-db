import React, { Component } from 'react';
import '../../services/swapi-service';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spinner from '../Spinner';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };


  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }


  onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false
      });
  }; 

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    console.log('update')
    const id = Math.floor(Math.random()*25) + 3;
    // const id = 15;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    console.log('render()');
    const { planet, loading, error} = this.state;

    const hasData = !(loading || error); //нет ни загрузки, ни ошибки

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return(
    <React.Fragment>
        <img className="planet-image" alt="planet"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
};