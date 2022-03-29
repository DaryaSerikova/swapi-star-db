import React from 'react';
import { StarshipList, } from '../SWcomponents';
import { withRouter } from 'react-router-dom'; //это HCO, чтобы передать history


const StarshipsPage = ({ history }) => {

  return (
    <StarshipList 
      onItemSelected={(itemId) => {
        // const newPath = `/starships/${itemId}`;
        history.push(`/starships/${itemId}`);
      }}/>
  );
};

export default withRouter(StarshipsPage);