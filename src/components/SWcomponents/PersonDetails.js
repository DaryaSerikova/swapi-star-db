import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc-helpers';


const PersonDetails = (props) => { //{itemId, getData, getImageUrl}
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);