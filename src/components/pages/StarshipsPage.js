import React from 'react';
import { StarshipList, } from '../SWcomponents';
import { withRouter } from 'react-router-dom'; //это HCO, чтобы передать history


const StarshipsPage = ({ history }) => {

  return (
    <StarshipList 
      onItemSelected={(itemId) => history.push(itemId)}/>
  );
};

export default withRouter(StarshipsPage);