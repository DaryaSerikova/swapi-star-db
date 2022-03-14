import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';


import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Row from '../Row';

import './PeoplePage.css';




export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1, //null
        // hasError: false
    };


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

        const itemList = (
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>

            {(i) => ( // это this.props.children
                `${i.name} ${i.birthYear})`
            )} 

            </ItemList>
        );

        const itemDetails = (        
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (

            <Row left={itemList} right={itemDetails}/>

            
        );
    }
}