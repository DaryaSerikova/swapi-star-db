// 'https://swapi.dev/api/people/1/';

export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }

    return await res.json(); //body
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    console.log('this', this)
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPerson);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = this.getResource(`/starships/${id}/`); //await?
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = (starship) => {

    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  };

  _transformPerson = (person) => {
    
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach( (p) => {
    // console.log(p.name);  
  });
  // console.log(body);
})

swapi.getPerson(3).then((p) => {
    // console.log(p.name);  
});
  


  // getResource('https://swapi.dev/api/people/1/')
  //   .then((body) => {
  //     console.log(body);
  //   })
  //   .catch((err) => {
  //     console.log('Could not fetch',err);
  //   });


  // fetch('https://swapi.dev/api/people/1/')
  //   .then((res) => {
  //     // console.log('Got response', res.status);
  //     return res.json();
  //   })
  //   .then((body) => {
  //     console.log(body);
  //   });