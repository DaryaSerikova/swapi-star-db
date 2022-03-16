import React, { Component } from 'react';
import Row from '../Row';
import { PersonDetails, PersonList, } from '../SWcomponents';


export default class PeoplePage extends Component {
  
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
      left={<PersonList onItemSelected={this.onItemSelected}/>}
      right={<PersonDetails itemId={this.state.selectedItem}/>}/>
    );
  }
}