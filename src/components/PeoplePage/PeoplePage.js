import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import ErrorIndicator from '../ErrorIndicator';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './PeoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1, //null
        hasError: false
    };

    componentDidCatch() {
        // debbugger;// Sourse

        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (id) => {
        // console.log('Click!');
        this.setState({
          selectedPerson: id
        });
      };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}