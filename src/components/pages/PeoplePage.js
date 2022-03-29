import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Row from '../Row';
import { PersonDetails, PersonList } from '../SWcomponents';



const PeoplePage = ({ history, match }) => {

  const {id} = match.params;

  return (
    <Row 
      left={<PersonList onItemSelected={(id) => history.push(id)}/>}
      right={<PersonDetails itemId={id}/>}/>
  );
};

export default withRouter(PeoplePage);