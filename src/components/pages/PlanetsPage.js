import React, { Component } from 'react';
import Row from '../Row';
import { PlanetDetails, PlanetList, } from '../SWcomponents';


export default class PlanetsPage extends Component {
  
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  };

  render() {
    // const { selectedItem } = this.state;

    return (
      <Row 
      left={<PlanetList onItemSelected={this.onItemSelected}/>}
      right={<PlanetDetails itemId={this.state.selectedItem}/>}/>
    );
  }
}