import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContext.js';
import { withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const PlanetDetails = (props) => { //{itemId}

    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (SwapiService) => {
    return {
        getData: SwapiService.getPlanet,
        getImageUrl: SwapiService.getPlanetImage
    }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);