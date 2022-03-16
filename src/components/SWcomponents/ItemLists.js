import React from "react";
import ItemList from '../ItemList';
import { withData, withSwapiService } from "../hoc-helpers";


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

const renderName = ({ name }) => <span> {name} </span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(
                    withData(withChildFunction(ItemList, renderName)),
                    mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                    withData(withChildFunction(ItemList, renderName)),
                    mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                    withData(withChildFunction(ItemList, renderModelAndName)),
                    mapStarshipMethodsToProps);

//Внимание! если использовать код ниже, то нужно переписать везде  
// использование функциий, потому что теперь у них другое поведение
// const StarshipList = withSwapiService(mapPersonMethodsToProps)(
//     withData(
//         withChildFunction(renderModelAndName)(
//             ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};

//Техника: "частично применненные функции" (partially applied functions)
// const add = (a, b) => a + b;
// add(1, 2);

// const add = (a) => (b) => a + b; //это оно
// add(1)(2);
// Такие функции принимают часть аргументов и возвращают функции - 
// с меньшим количеством аргументов



// const compose = (...funcs) => (comp) => {
//     //???
// }

// compose(a, b, c)(value)

// a(b(c(value)));

// compose(
//     withSwapiService(mapMethodsToProps),
//     withData,
//     withChildFunction(renderModelAndName)
// )(ItemList);

// const arr = ['a', 'b', 'c'];
// const res = arr.reduceRight((prevResult, value) => {
//     return prevResult + value;
// },'XX')
// console.log(res); //XX cba