import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext.js';
import { withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const StarshipDetails = (props) => {//{itemId}

    return(
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);