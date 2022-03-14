import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../ErrorButton';

import './ItemDetails.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state =  {
    item: null,
    image: null
  };

  componentDidMount() {
    console.log('componentDidMount()')
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate()')
    // код нужно обязательно обернуть в условие, 
    // если нужно сменить setState,иначе будет бесконечный цикл рендеров
    if(this.props.itemId !== prevProps.itemId) { 
      this.updateItem();
    }
  }

  updateItem () {
    console.log('updateItem()')

    const { itemId, getData, getImageUrl } = this.props;

    if(!itemId) {
      return; // если personId === null мы не будем делать ничего
    }

    getData(itemId)
      .then((item) => { //когда данные станут доступны,
        console.log(item)
        this.setState({ 
          item,
          image: getImageUrl(item)
         }); //обновляем данные
      });
  }

  render() {
    console.log('render');

    const { item, image } = this.state;
    console.log(item);
    if (!item) { // item?
      return <span>Select an item from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor} = item;
    // console.log('person.id:',id)
 
    
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image} 
          alt="item"/>

        <div className="card-body">
          <h4>{name} {this.props.itemId}</h4>
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
          <ErrorButton />
        </div>
      </div>
    )
  }
}