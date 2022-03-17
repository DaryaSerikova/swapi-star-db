import React from 'react';
import PropTypes from 'prop-types';


import './Row.css'

const Row = ({ left, right }) => {
return (
    <div className="row mb2">
      <div className="col-md-6">
        { left }
      </div>
      <div className="col-md-6">
      { right }
      </div>
    </div>
  );
};

Row.propTypes = {
  // PropTypes.node проверяет, что соответ-ющий property это что-то,
  // что можно отрендерить в JSX
  // PropTypes.element более узкий: работает только React-элементы 
  // хотя наш элемент может работать со строками и с числами
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;


// Пример, user, у которого есть name и role, где role имеет одно
// из двух значений: либо 'user', либо 'admin' 
// Функция PropTypes.shape означает, что мы ждем объект с какой-то 
// определенной формой. PropTypes.oneOf - один из ..

// MyComp.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string,
//         role: PropTypes.oneOf(['user', 'admin']) 
//     })
// }