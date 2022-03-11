import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state =  {
    person: null
  };

  componentDidMount() {
    console.log('componentDidMount()')
    this.updatePerson();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.personId !== prevProps.personId) {
  //   console.log('componentDidUpdate')

  //     this.updatePerson();
  //   }
  // }

  updatePerson () {
    console.log('updatePerson()')

    const { personId } = this.props;

    if(!personId) {
      return; // если personId === null мы не будем делать ничего
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => { //когда данные станут доступны,
        this.setState({ person }); //обновляем данные
      })
  }

  render() {
    console.log('render');
    console.log('this.state.person:',this.state.person);
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor} = this.state.person;
 
    
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="character"/>

        <div className="card-body">
          <h4>{name} {this.props.personId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}